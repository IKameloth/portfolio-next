import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Camilo Matteo - Web Developer" />
        <meta name="author" content="Camilo Matteo" />
        <meta name="author" content="cmatteo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Camilo Matteo" />
        <meta name="og:title" content="Camilo Matteo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Camilo Matteo - Portfolio</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
