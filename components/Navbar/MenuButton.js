const { Box } = require("@chakra-ui/layout")
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

const MenuButton = ({ isOpen, onClick, ...rest }) => {
  return <Box as={isOpen ? IoClose : FiMenu} onClick={onClick} boxSize={6} {...rest} />
}

export default MenuButton
