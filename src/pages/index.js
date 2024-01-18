import Layout from '../components/layouts/article'
import { Container, Box, useColorModeValue } from '@chakra-ui/react'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, Im Web Developer from Chile! 🇨🇱
      </Box>
    </Container>
  </Layout>
)

export default Home
