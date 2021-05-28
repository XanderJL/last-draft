import { useRouter } from "next/router"
import { Tab, TabList, Tabs } from "@chakra-ui/tabs"
import Link from "./Link"

const BlogTabs = ({ categories }) => {
  const router = useRouter()

  return (
    <Tabs
      defaultIndex={categories.findIndex(
        ({ slug }) => slug === router.query.category
      )}
      overflowX={{ base: "scroll", md: "hidden" }}
      colorScheme="cyan"
    >
      <TabList>
        {categories.map((category) => {
          const { _id, title, slug } = category
          return (
            <Tab key={_id} textTransform="uppercase" whiteSpace="nowrap">
              <Link href={`/stories/${slug}`}>{title}</Link>
            </Tab>
          )
        })}
      </TabList>
    </Tabs>
  )
}

export default BlogTabs
