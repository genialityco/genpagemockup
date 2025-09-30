import React from 'react'
import { AppShell, Container } from '@mantine/core'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      <Container>{children}</Container>
    </AppShell>
  )
}