import { Grid } from "@chakra-ui/react"

const CardGrid = ({ children }) => {
  return (
    <Grid
      templateColumns={{
        base: "minmax(0, 1fr)",
        md: "repeat(auto-fill, minmax(280px, 1fr))",
      }}
      gap={8}
    >
      {children}
    </Grid>
  )
}

export default CardGrid
