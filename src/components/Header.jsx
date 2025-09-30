import React, { useState } from 'react'
import { 
  Title, 
  Group, 
  Button, 
  Anchor, 
  Box, 
  Burger,
  Drawer,
  Stack,
  Container,
  Divider
} from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [opened, setOpened] = useState(false)
  const location = useLocation()
  
  const navigationItems = [
    { label: 'Inicio', href: '/', isHome: true },
    { label: 'Experiencias Interactivas', href: '/experiencias-interactivas' },
    { label: 'Gen.Networking', href: '/gen-networking' },
    { label: 'Gen.Campus', href: '/gen-campus' },
    { label: 'Congreso Potenciado', href: '/congreso-potenciado' },
    { label: 'Gen.Live', href: '/gen-live' },
  ]
  
  const isActive = (href) => {
    if (href === '/' && location.pathname === '/') return true
    if (href !== '/' && location.pathname === href) return true
    return false
  }

  return (
    <>
      {/* Desktop & Mobile Header */}
      <Box 
        component="header" 
        className="pop-header"
        style={{ 
          height: 80, 
          padding: '0 24px', 
          background: '#000',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: '4px solid #fd7e14',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
        }}
      >
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            {/* Logo */}
            <Anchor 
              component={Link} 
              to="/" 
              style={{ textDecoration: 'none' }}
            >
              <Title 
                order={3} 
                style={{ 
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                  color: '#fff',
                  textTransform: 'uppercase'
                }}
              >
                Gen.<span className="pop-highlight">iality</span>
              </Title>
            </Anchor>

            {/* Desktop Navigation */}
            <Group gap="lg" visibleFrom="md">
              {navigationItems.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  to={item.href}
                  className={`nav-link-pop ${isActive(item.href) ? 'active' : ''}`}
                  style={{
                    color: isActive(item.href) ? '#fd7e14' : '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    background: isActive(item.href) ? '#fff' : 'transparent',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.target.style.color = '#000'
                      e.target.style.background = '#fd7e14'
                      e.target.style.borderColor = '#fd7e14'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.target.style.color = '#fff'
                      e.target.style.background = 'transparent'
                      e.target.style.borderColor = 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Anchor>
              ))}
              
              {/* <Button 
                className="color-block"
                size="sm"
                style={{
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Solicita Demo →
              </Button> */}
            </Group>

            {/* Mobile Burger */}
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              color="#fff"
              size="md"
              hiddenFrom="md"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="100%"
        position="top"
        withCloseButton={false}
        styles={{
          content: {
            background: '#000',
            height: '100vh'
          },
          body: {
            padding: 0,
            height: '100%'
          }
        }}
      >
        <Box style={{ height: '100%', position: 'relative' }}>
          {/* Mobile Header */}
          <Box 
            style={{ 
              height: 80, 
              padding: '0 24px',
              borderBottom: '4px solid #fd7e14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Title 
              order={3} 
              style={{ 
                fontSize: '1.8rem',
                fontWeight: 900,
                letterSpacing: '-0.5px',
                color: '#fff',
                textTransform: 'uppercase'
              }}
            >
              Gen.<span className="pop-highlight">iality</span>
            </Title>
            
            <Burger
              opened={opened}
              onClick={() => setOpened(false)}
              color="#fff"
              size="md"
            />
          </Box>

          {/* Mobile Navigation */}
          <Stack 
            gap="md" 
            style={{ 
              padding: '2rem',
              height: 'calc(100% - 80px)',
              justifyContent: 'center'
            }}
          >
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <Anchor
                  component={Link}
                  to={item.href}
                  onClick={() => setOpened(false)}
                  style={{
                    color: isActive(item.href) ? '#fd7e14' : '#fff',
                    textDecoration: 'none',
                    fontWeight: 900,
                    fontSize: '2.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    padding: '1rem 0',
                    textAlign: 'center',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                  onTouchStart={(e) => {
                    if (!isActive(item.href)) {
                      e.target.style.color = '#fd7e14'
                      e.target.style.textShadow = '0 0 20px #fd7e14'
                    }
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    {item.label}
                  </span>
                  {isActive(item.href) && (
                    <Box
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: '#fd7e14',
                        borderRadius: '0.5rem',
                        zIndex: 1,
                        opacity: 0.1
                      }}
                    />
                  )}
                </Anchor>
                {index < navigationItems.length - 1 && (
                  <Divider 
                    color="#333" 
                    style={{ margin: '0.5rem 2rem' }} 
                  />
                )}
              </React.Fragment>
            ))}
            
            {/* <Button 
              className="color-block"
              size="xl"
              style={{
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '1.2rem',
                marginTop: '2rem'
              }}
              onClick={() => setOpened(false)}
            >
              Solicita Demo →
            </Button> */}
          </Stack>

          {/* Pop-Art Geometric Accents */}
          <div className="geometric-accent circle" style={{ top: '10%', right: '10%', opacity: 0.3 }} />
          <div className="geometric-accent triangle" style={{ bottom: '15%', left: '10%', opacity: 0.3 }} />
          <div className="geometric-accent square" style={{ top: '60%', right: '15%', opacity: 0.2 }} />
        </Box>
      </Drawer>
    </>
  )
}