import React from 'react'
import { Title, Group, Button, Anchor, Box } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box 
      component="header" 
      style={{ 
        height: 80, 
        padding: '0 24px', 
        borderBottom: '1px solid rgba(253, 126, 20, 0.1)',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <Group justify="space-between" h="100%">
        <Title 
          order={3} 
          className="gradient-text"
          style={{ 
            fontSize: '1.5rem',
            fontWeight: 800,
            letterSpacing: '-0.5px'
          }}
        >
          Geniality
        </Title>
        <Group gap="xl" visibleFrom="md">
          <Anchor href="/#inicio" className="nav-link">Inicio</Anchor>
          <Anchor href="/#soluciones" className="nav-link">Soluciones</Anchor>
          <Anchor href="/#experiencias" className="nav-link">Experiencias</Anchor>
          <Anchor href="/#impacto" className="nav-link">Impacto</Anchor>
          <Anchor href="/#contacto" className="nav-link">Contacto</Anchor>
          <Button 
            component={Link} 
            to="/gen-networking" 
            color="orange" 
            radius="xl"
            size="sm"
            variant="gradient"
            gradient={{ from: 'orange.6', to: 'orange.4', deg: 45 }}
            style={{
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(253, 126, 20, 0.3)'
            }}
          >
            Solicita una Demo
          </Button>
        </Group>
      </Group>
    </Box>
  )
}