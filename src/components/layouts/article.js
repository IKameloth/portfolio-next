import { motion } from 'framer-motion'
import { Head } from '@chakra-ui/react'
import { GridItemStyle } from '../GridItemStyle'

const Layout = ({ children, title }) => {
  const reTitle = `${title} - Camilo Matteo`

  return (
    <motion.article>
      <>
        {title && (
          <Head>
            <title>{reTitle}</title>
            <meta name="twitter:title" content={reTitle} />
            <meta property="og:title" content={reTitle} />
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
