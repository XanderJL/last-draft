import { Tab, TabList, Tabs } from "@chakra-ui/tabs"
import * as React from "react"
import Link from "./Link"

const BlogTabs = ({ categories }) => {
  return (
    <Tabs overflowX={{ base: "scroll", md: "hidden" }} colorScheme="cyan">
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
