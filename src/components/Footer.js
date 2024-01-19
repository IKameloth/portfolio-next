import React from 'react'
import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box align="center" opacity={0.7} fontSize="sm">
    Made with 🫀 from Peñaflor 🇨🇱 - &copy; {new Date().getFullYear()}
  </Box>
)

export default Footer
