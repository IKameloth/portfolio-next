import NextLink from 'next/link'
import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found</Text>
      <Divider my={6} />
      <Box my={6} aling="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
