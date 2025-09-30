import React from 'react'
import { Box, Text, Group, Anchor, Container, Stack } from '@mantine/core'
import { IconBrandYoutube, IconBrandInstagram, IconMail } from '@tabler/icons-react'

export default function Footer() {
  return (
    <Box 
      component="footer" 
      style={{ 
        background: '#000',
        borderTop: '4px solid #fd7e14',
        padding: '2rem 0 1rem 0',
        marginTop: 'auto'
      }}
    >
      <Container size="xl">
        <Stack gap="lg" align="center">
          {/* Contact Email */}
          <Anchor
            href="mailto:contacto@geniality.com.co"
            style={{
              color: '#fd7e14',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'transparent',
              border: '3px solid #fd7e14',
              borderRadius: '0.75rem',
              transition: 'all 0.3s ease',
              fontWeight: 900,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fd7e14'
              e.target.style.color = '#000'
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 10px 30px rgba(253, 126, 20, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#fd7e14'
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}
          >
            <IconMail size={28} />
            contacto@geniality.com.co
          </Anchor>

          {/* Social Networks */}
          <Group gap="xl">
            <Anchor
              href="https://www.youtube.com/@genialitylab"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                border: '2px solid #fd7e14',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fd7e14'
                e.target.style.color = '#000'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 25px rgba(253, 126, 20, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#fff'
                e.target.style.transform = 'translateY(0px)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <IconBrandYoutube size={24} />
              YouTube
            </Anchor>

            <Anchor
              href="https://www.instagram.com/geniality_sas/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                border: '2px solid #fd7e14',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fd7e14'
                e.target.style.color = '#000'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 25px rgba(253, 126, 20, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#fff'
                e.target.style.transform = 'translateY(0px)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <IconBrandInstagram size={24} />
              Instagram
            </Anchor>
          </Group>

          {/* Copyright */}
          <Text 
            size="sm" 
            ta="center"
            style={{
              color: '#adb5bd',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            © 2025 Geniality. Todos los derechos reservados.
          </Text>
        </Stack>
      </Container>

      {/* Pop-Art Geometric Accent */}
      <Box
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '20px',
          width: '30px',
          height: '30px',
          background: '#fd7e14',
          borderRadius: '50%',
          opacity: 0.1
        }}
      />
    </Box>
  )
}