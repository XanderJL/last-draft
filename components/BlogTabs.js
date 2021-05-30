import { useRouter } from "next/router"
import { Tab, TabList, Tabs } from "@chakra-ui/tabs"
import Link from "./Link"

const BlogTabs = ({ categoryTabs }) => {
  const router = useRouter()

  return (
    <Tabs
      defaultIndex={categoryTabs.findIndex(
        ({ slug }) => slug === router.query.category
      )}
      overflowX={{ base: "scroll", md: "hidden" }}
      colorScheme="cyan"
    >
      <TabList>
        {categoryTabs.map((category) => {
          const { _id, title, slug } = category
          return (
            <Link key={_id} href={`/stories/${slug}`}>
              <Tab textTransform="uppercase" whiteSpace="nowrap">
                {title}
              </Tab>
            </Link>
          )
        })}
      </TabList>
    </Tabs>
  )
}

export default BlogTabs
