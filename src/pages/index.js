import Layout from '../components/layouts/article'
import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  chakra,
  Button
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/Bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
      <Box display={{ md: 'flex' }} alignItems="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Camilo Matteo
          </Heading>
          <Heading as="h4" size="md">
            Web Developer
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/image-profile.webp"
              alt="profile-image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hi!
        </Heading>
        <Paragraph>
          I am a professional with +6 years of experience as a Web Developer,
          passionate about writing code, prioritizing good practices, coding
          clean and readable solutions. I consider myself a proactive person, I
          like to work in a team and I adapt easily to changes.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Experience
        </Heading>
        <BioSection>
          <BioYear>May 2022 - January 2024</BioYear>
          Jumpitt Labs S.A. - MicroFrontend with ReactJS, Typescript, Redux,
          Antd. Others web development using MaterialUI and Tailwind. Api
          Gateway with NestJS, RubyOnRails and a litte bit of ReactNative in a
          mobile project.
        </BioSection>
        <BioSection>
          <BioYear>September 2018 - May 2022</BioYear>
          Autentia S.A. - Web development usign RubyOnRails, Javascript, Bulma,
          ReactJS and Typescript.
        </BioSection>
        <BioSection>
          <BioYear>December 2017- September 2018</BioYear>
          Jumpitt Labs S.A. - Web development usign PHP, Laravel, Javascript and
          Bootstrap.
        </BioSection>
        <BioSection>
          <BioYear>April 2017- August 2017</BioYear>
          Qality S.A. - Professional practice and web development usign PHP,
          CodeIgniter, Javascript, Jquery, HTML and CSS.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the carrier in the professional institute AIEP.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sandbox
        </Heading>
        <Box align="center" my={4}>
          <Paragraph>
            In this section i try to show some projects like a sandbox when i
            need writte something or testing some tool for work.
          </Paragraph>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Works
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
