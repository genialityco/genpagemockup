import React from 'react'
import { Box, Text } from '@mantine/core'

export default function Footer() {
  return (
    <Box component="footer" style={{ height: 60, padding: '16px', borderTop: '1px solid #e9ecef' }}>
      <Text size="sm" ta="center">© 2025 Geniality. Todos los derechos reservados.</Text>
    </Box>
  )
}