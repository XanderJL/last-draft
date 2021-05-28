import { Flex } from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

const Tags = ({ tags }) => {
  return (
    <Flex justify="flex-start" flexWrap="wrap">
      {tags.map((tag) => {
        return (
          <Tag key={tag} mr={2} mb={2} variant="solid" bg="cyan.50" color="cyan.900">
            {tag}
          </Tag>
        )
      })}
    </Flex>
  )
}

export default Tags
