import React from 'react'
import Chakra from '../components/Chakra'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/Fonts'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const onExit = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true} onExitComplete={onExit}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
