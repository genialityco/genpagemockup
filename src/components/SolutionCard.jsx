import React from 'react'
import { Card, Title, Text, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function SolutionCard({ title, desc, link }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={4} color="indigo">{title}</Title>
      <Text mt="sm">{desc}</Text>
      <Button component={Link} to={link} variant="subtle" color="indigo" mt="md">
        Conoce más →
      </Button>
    </Card>
  )
}