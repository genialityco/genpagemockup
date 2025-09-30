import React from 'react'
import { Box } from '@mantine/core'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      
      <Box
        component="main"
        style={{
          paddingTop: '80px', // Account for fixed header
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        {children}
      </Box>
      
      <Footer />
    </Box>
  )
}