import React from 'react'
import { Title, Group, Button, Anchor, Box } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box component="header" style={{ height: 60, padding: '16px', borderBottom: '1px solid #e9ecef' }}>
      <Group justify="space-between">
        <Title order={3} c="indigo">Geniality</Title>
        <Group gap="lg">
          <Anchor href="/#inicio">Inicio</Anchor>
          <Anchor href="/#soluciones">Soluciones</Anchor>
          <Anchor href="/#experiencias">Experiencias</Anchor>
          <Anchor href="/#impacto">Impacto</Anchor>
          <Anchor href="/#clientes">Clientes</Anchor>
          <Anchor href="/#contacto">Contacto</Anchor>
          <Button component={Link} to="/gen-networking" color="indigo" radius="xl">Solicita una Demo</Button>
        </Group>
      </Group>
    </Box>
  )
}