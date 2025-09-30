import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  SimpleGrid,
  ThemeIcon,
  Box,
  Stack,
  Table,
} from "@mantine/core";
import {
  IconBrain,
  IconUsers,
  IconChartBar,
  IconRobot,
  IconSchool,
  IconTrendingUp,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function GenCampus() {
  return (
    <Layout>
      {/* HERO - Neo-Warhol Style */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="geometric-accent circle" style={{ top: '8%', left: '10%' }} />
        <div className="geometric-accent triangle" style={{ bottom: '12%', right: '8%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <Stack gap="xl">
              <div className="big-number" style={{ top: '-50px', left: '-20px' }}>03</div>
              
              <Title order={1}>
                Gen.<span className="pop-highlight">Campus</span>
              </Title>
              
              <Text className="editorial-text">
                De mucha información a <span className="editorial-highlight">conocimientos claros y aplicables</span>.  
                Plataforma de <span className="editorial-highlight">conocimiento profesional</span> 
                potenciada con <span className="editorial-highlight">asistentes IA</span> y 
                <span className="editorial-highlight">mentores humanos globales</span> 
                para crecimiento práctico, medible y orientado a resultados en tu carrera profesional.
              </Text>
              
              <Group>
                <Button className="color-block">
                  Acelera tu crecimiento →
                </Button>
              </Group>
            </Stack>
            
            <Box className="halftone-bg overlay-orange" style={{ height: '400px', borderRadius: '8px', position: 'relative' }}>
              <div className="geometric-accent square" style={{ top: '25%', left: '30%', opacity: 0.5 }} />
            </Box>
          </div>
        </Container>
      </section>

      {/* EL PROBLEMA - Editorial Style */}
      <section className="section">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">01</div>
              <Title order={2}>
                El Desafío del Conocimiento Fragmentado
              </Title>
            </div>
            
            <Stack gap="md">
              <Text className="editorial-text">
                • Los profesionales gastan <span className="editorial-highlight">11 horas semanales</span> 
                buscando información relevante para su trabajo (McKinsey Global Institute, 2024).
              </Text>
              <Text className="editorial-text">
                • Solo el <span className="editorial-highlight">23% del conocimiento</span> adquirido en 
                cursos tradicionales se aplica efectivamente en el trabajo.
              </Text>
              <Text className="editorial-text">
                • La <span className="editorial-highlight">sobrecarga de información</span> reduce la 
                productividad hasta un 40% en roles de conocimiento intensivo.
              </Text>
              <Text className="editorial-text">
                • Falta de <span className="editorial-highlight">mentoring personalizado</span> y 
                retroalimentación específica para el crecimiento profesional.
              </Text>
            </Stack>
          </div>
        </Container>
      </section>

      {/* NUESTRA SOLUCIÓN - Pop-Art Cards */}
      <section className="section invert">
        <Container size="lg" className="magazine-container">
          <Title order={2} ta="center" mb="xl">
            Ecosistema de Conocimiento Inteligente
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Card className="pop-animation">
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconRobot />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Asistentes IA Especializados
              </Title>
              <Text className="editorial-text" c="white">
                IA entrenada en tu industria que filtra, resume y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', marginLeft: '0.3em'}}>contextualiza información</span> 
                relevante para tus objetivos específicos.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '0.5s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconUsers />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Mentores Globales
              </Title>
              <Text className="editorial-text" c="white">
                Red de expertos internacionales para 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>mentoría personalizada</span>, 
                feedback específico y networking estratégico.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '1s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconChartBar />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Analytics de Crecimiento
              </Title>
              <Text className="editorial-text" c="white">
                Métricas de progreso, mapas de competencias y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>rutas de aprendizaje</span> 
                optimizadas para acelerar tu desarrollo profesional.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </section>

      {/* COMPARACIÓN - Magazine Style Table */}
      <section className="section overlay-orange">
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Gen.Campus vs. Educación Tradicional
          </Title>
          
          <Box className="print-style">
            <Table className="pop-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="color-block" style={{ color: 'white', fontWeight: 900 }}>Aspecto</Table.Th>
                  <Table.Th className="color-block" style={{ color: 'white', fontWeight: 900 }}>Educación Tradicional</Table.Th>
                  <Table.Th className="pop-highlight" style={{ color: 'black', fontWeight: 900 }}>Gen.Campus</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td><strong>Personalización</strong></Table.Td>
                  <Table.Td>Contenido genérico</Table.Td>
                  <Table.Td className="editorial-highlight">IA + Mentores personalizados</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td><strong>Aplicabilidad</strong></Table.Td>
                  <Table.Td>Teórica, abstracta</Table.Td>
                  <Table.Td className="editorial-highlight">Casos reales, proyectos activos</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td><strong>Tiempo</strong></Table.Td>
                  <Table.Td>Meses/años</Table.Td>
                  <Table.Td className="editorial-highlight">Micro-learning adaptativo</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td><strong>Medición</strong></Table.Td>
                  <Table.Td>Exámenes, certificados</Table.Td>
                  <Table.Td className="editorial-highlight">ROI profesional medible</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td><strong>Networking</strong></Table.Td>
                  <Table.Td>Limitado, local</Table.Td>
                  <Table.Td className="editorial-highlight">Red global de expertos</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Box>
        </Container>
      </section>

      {/* MÓDULOS - Magazine Layout */}
      <section className="section invert">
        <div className="geometric-accent triangle" style={{ top: '15%', right: '10%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">02</div>
              <Title order={2}>
                Módulos de Especialización
              </Title>
            </div>
            
            <Stack gap="lg">
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Leadership 4.0
                </Text>
                <Text c="white" size="sm">
                  Liderazgo en era digital con IA, equipos remotos y transformación cultural
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Data-Driven Strategy
                </Text>
                <Text c="white" size="sm">
                  Estrategia basada en datos, analytics avanzado y toma de decisiones
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Innovation Management
                </Text>
                <Text c="white" size="sm">
                  Gestión de innovación, design thinking y metodologías ágiles
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  AI Integration
                </Text>
                <Text c="white" size="sm">
                  Integración de IA en procesos, automatización y futuro del trabajo
                </Text>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* RESULTADOS - Warhol Numbers */}
      <section className="section">
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">Impacto Comprobado</Title>
          
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +185%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Productividad profesional
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                73%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Obtienen promociones
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +45%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Incremento salarial promedio
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                30d
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Resultados visibles
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* TESTIMONIOS - Warhol Style */}
      <section className="section invert">
        <div className="geometric-accent circle" style={{ top: '25%', left: '8%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Historias de Transformación
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                CMO → Chief Innovation Officer
              </Title>
              <Text className="editorial-text">
                "En 6 meses, el asistente IA de Gen.Campus me ayudó a identificar 
                <strong>15 oportunidades de innovación</strong> que resultaron en 
                <strong>$3.2M en nuevos ingresos</strong>. Mi promoción llegó en el mes 8."
              </Text>
              <Text size="sm" mt="md" style={{ opacity: 0.8 }}>
                — María Elena Rodríguez, Multinacional Tech
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Consultor → Partner
              </Title>
              <Text className="editorial-text">
                "La mentoría global me conectó con clientes en 
                <strong>3 continentes</strong>. En 9 meses pasé de freelancer a 
                partner de la consultora más grande de mi país."
              </Text>
              <Text size="sm" mt="md" style={{ opacity: 0.8 }}>
                — Carlos Mendoza, Strategy Consultant
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FINAL - Editorial Style */}
      <section className="section overlay-orange">
        <div className="geometric-accent square" style={{ bottom: '15%', right: '12%' }} />
        
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">
            Acelera tu crecimiento profesional con 
            <br /><span className="pop-highlight">conocimiento inteligente</span>
          </Title>
          
          <Button size="xl" className="color-block">
            Inicia tu transformación →
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
