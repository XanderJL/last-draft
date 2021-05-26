import { Container, Image } from "@chakra-ui/react"
import Brands from "@components/Brands"
import HeroCard from "@components/Cards/HeroCard"
import Hero from "@components/Hero"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"
import { PortableText } from "@lib/sanity"
import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"

const About = ({ data }) => {
  const { heroImage, heroCard, sectionOne, brands } = data

  return (
    <Layout>
      <Hero placeholder={heroImage?.metadata?.lqip} image={heroImage?.url}>
        <HeroCard>
          <PortableText blocks={heroCard} />
        </HeroCard>
      </Hero>
      <Container maxW="container.xl">
        <Section display="flex" flexDirection={{ base: "column", md: "row" }}>
          <PortableText blocks={sectionOne?.body} />
          <Image src={sectionOne?.image?.url} pl={{ base: 0, md: 10 }} />
        </Section>
        <Section>
          <Brands brands={brands} />
        </Section>
      </Container>
    </Layout>
  )
}

const aboutPageQuery = groq`
  *[_type == "aboutPage"]{
    metaDescription,
    title,
    heroCard,
    "heroImage": heroImage.asset->{
      metadata,
      url
    },
    sectionOne{
      body,
      "image": image.asset->{
        metadata,
        url
      }
    },
    brands[]->{
          _id,
          alt,
          brandName,
          brandUrl,
          "logo": logo.asset->{
             metadata,
              url
          }
        },
    publication,
    posts[]{
      _id,
      "slug": slug.current,
      category->{
        "slug": slug.current,
      },
      title,
      body,
      previewCopy,
      "mainImage": mainImage.asset->{
        metadata,
        url
      },
      mainAlt,
    }
  }[0]
`

export const getStaticProps = async () => {
  const data = await getClient().fetch(aboutPageQuery)
  return { props: { data } }
}

export default About

// const About = ({ data }) => {
//   const CardRenderer = (props) => {
//     const { style = "normal" } = props.node

//     if (style === "h1") {
//       return (
//         <Heading
//           textTransform="uppercase"
//           letterSpacing="0.2rem"
//           fontSize={{ base: "2xl", md: "4xl" }}
//           fontWeight={400}
//           pb="1rem"
//         >
//           {props.children}
//         </Heading>
//       )
//     }
//     if (style === "h2") {
//       return (
//         <Heading
//           as="h2"
//           textTransform="uppercase"
//           letterSpacing="0.2rem"
//           fontSize={{ base: "xl", md: "2xl" }}
//           fontWeight={400}
//           pb="1rem"
//         >
//           {props.children}
//         </Heading>
//       )
//     }

//     if (style === "blockquote") {
//       return <blockquote>- {props.children}</blockquote>
//     }

//     return <Text pb="1rem">{props.children}</Text>
//   }

//   const SectionRenderer = (props) => {
//     const { style = "normal" } = props.node

//     if (/^h\d/.test(style)) {
//       return React.createElement(
//         style,
//         {
//           className: `title is-montserrat is-uppercase has-text-black is-size-4-mobile`,
//         },
//         props.children
//       )
//     }

//     if (style === "blockquote") {
//       return <blockquote>- {props.children}</blockquote>
//     }

//     // Fall back to default handling
//     return PortableText.defaultSerializers.types.block(props)
//   }
//   const BlockImageRenderer = (props) => {
//     const urlFor = (source) =>
//       imageUrlBuilder({
//         projectId: process.env.GATSBY_SANITY_ID,
//         dataset: process.env.GATSBY_SANITY_DATASET,
//       }).image(source)
//     return (
//       <Link
//         as={GatsbyLink}
//         role="button"
//         to="/stories"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src={urlFor(props.node.image.asset).maxWidth(400)}
//           alt={props.node.alt}
//         />
//       </Link>
//     )
//   }

//   const { title, posts, heroImage, _rawHeroCard } = data.aboutPage
//   const metaDescription = data.aboutPage._rawMetaDescription[0].children[0].text
//   const sectionOne = data.aboutPage._rawSectionOne.body
//   const sectionOneImg = data.aboutPage.sectionOne.image.asset
//   const sectionOneAlt = data.aboutPage.sectionOne.alt
//   const publication = data.aboutPage._rawPublication.body
//   const pubImage = data.aboutPage.publication.image.asset
//   const pubAlt = data.aboutPage.publication.alt

//   return (
//     <Layout title={title} description={metaDescription}>
//       <Hero
//         image={getGatsbyImageData(
//           heroImage.asset,
//           { maxWidth: 1440 },
//           sanityConfig
//         )}
//         styles={imageHotspot(heroImage.hotspot)}
//         size="fullheight-with-navbar"
//       >
//         <Box
//           bg="white"
//           color="black"
//           p={{ base: "2rem 1.25rem", md: "4rem 2rem" }}
//           maxW="55ch"
//           m={{ base: 0, md: "0 auto" }}
//           borderRadius={4}
//           boxShadow="lg"
//         >
//           <PortableText
//             blocks={_rawHeroCard}
//             serializers={{ types: { block: CardRenderer } }}
//           />
//         </Box>
//       </Hero>
//       <section className="section-storytelling">
//         <div className="container">
//           <div className="copy">
//             <div className="content">
//               <PortableText
//                 blocks={sectionOne}
//                 serializers={{ types: { block: SectionRenderer } }}
//               />
//             </div>
//           </div>
//           <SanityImage
//             image={sectionOneImg}
//             options={{ maxWidth: 1440 }}
//             alt={sectionOneAlt || ""}
//             className="type-writer"
//           />
//         </div>
//       </section>
//       {posts.length > 0 && (
//         <section className="section">
//           <Container className="container">
//             <Grid
//               templateColumns={{
//                 base: "minmax(0, 1fr)",
//                 md: "repeat(auto-fill, minmax(325px, 1fr))",
//               }}
//               gap={8}
//             >
//               {posts.map((post) => {
//                 const {
//                   id,
//                   slug,
//                   category,
//                   title,
//                   previewCopy,
//                   _rawBody,
//                   mainImage,
//                 } = post
//                 return (
//                   <PostCard
//                     key={id}
//                     title={title}
//                     image={mainImage.asset}
//                     link={`/stories/${category.slug.current}/${slug.current}`}
//                   >
//                     {previewCopy
//                       ? previewCopy
//                       : toPlainText(_rawBody).slice(0, 159) + "..."}
//                   </PostCard>
//                 )
//               })}
//             </Grid>
//           </Container>
//         </section>
//       )}
//       <Brands />
//       {/* <Box as="section" className="section-publication">
//         <Box className="container">
//           <Box className="card-publication">
//             <Box className="card-content">
//               <Box className="content">
//                 <PortableText
//                   blocks={publication}
//                   serializers={{
//                     types: {
//                       block: SectionRenderer,
//                       blockImage: BlockImageRenderer,
//                     },
//                   }}
//                 />
//                 <Box mt="2rem">
//                   <Link
//                     as={GatsbyLink}
//                     role="button"
//                     to="/stories"
//                     color="white"
//                     className="button is-solid is-montserrat is-uppercase"
//                   >
//                     stories &rang;
//                   </Link>
//                 </Box>
//               </Box>
//               <SanityImage
//                 image={pubImage}
//                 options={{ maxWidth: 1200 }}
//                 alt={pubAlt}
//                 className="image"
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box> */}
//     </Layout>
//   )
// }

// export const data = graphql`
//   {
//     aboutPage: sanityAboutPage {
//       _rawMetaDescription
//       title
//       _rawHeroCard
//       heroImage {
//         asset {
//           _id
//           url
//         }
//         hotspot {
//           x
//           y
//         }
//       }
//       _rawSectionOne
//       _rawPublication
//       sectionOne {
//         image {
//           asset {
//             _id
//             url
//           }
//         }
//       }
//       posts {
//         id
//         slug {
//           current
//         }
//         category {
//           slug {
//             current
//           }
//         }
//         title
//         _rawBody
//         previewCopy
//         mainImage {
//           asset {
//             _id
//             url
//           }
//         }
//         mainAlt
//       }
//       publication {
//         image {
//           asset {
//             _id
//             url
//           }
//         }
//         alt
//       }
//     }
//   }
// `

// export default About
