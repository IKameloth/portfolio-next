import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../Footer'
import dynamic from 'next/dynamic'
import VoxelLoader from '../LazyVoxelFigure'

const LazyVoxelFigure = dynamic(() => import('../Voxel'), {
  ssr: false,
  loading: () => <VoxelLoader />
})

const Main = ({ children, router }) => {
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
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelFigure />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
