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
} from "@mantine/core";
import {
  IconSparkles,
  IconBrain,
  IconHeart,
  IconTrendingUp,
  IconUsers,
  IconBolt,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function ExperienciasInteractivas() {
  return (
    <Layout>
      {/* HERO - Neo-Warhol Style */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="geometric-accent circle" style={{ top: '10%', left: '5%' }} />
        <div className="geometric-accent triangle" style={{ bottom: '15%', right: '10%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <Stack gap="xl">
              <div className="big-number" style={{ top: '-50px', left: '-20px' }}>01</div>
              
              <Title order={1}>
                Experiencias <span className="pop-highlight">Interactivas</span>
              </Title>
              
              <Text className="editorial-text">
                De eventos comunes a <span className="editorial-highlight">recuerdos imborrables</span>.  
                Aplicamos <span className="editorial-highlight">neurociencia</span>, 
                <span className="editorial-highlight">tecnología</span> y 
                <span className="editorial-highlight">creatividad</span> 
                al servicio de tu marca para crear momentos que activan emociones, 
                generan <span className="editorial-highlight">conexiones genuinas</span> y 
                entregan <span className="editorial-highlight">resultados medibles</span>.
              </Text>
              
              <Group>
                <Button className="color-block">
                  Crea tu experiencia →
                </Button>
              </Group>
            </Stack>
            
            <Box className="halftone-bg overlay-orange" style={{ height: '400px', borderRadius: '8px', position: 'relative' }}>
              <div className="geometric-accent square" style={{ top: '30%', left: '20%', opacity: 0.6 }} />
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
                ¿Por qué los eventos tradicionales fallan?
              </Title>
            </div>
            
            <Stack gap="md">
              <Text className="editorial-text">
                • Solo el <span className="editorial-highlight">12% de los asistentes</span> recuerda el mensaje clave 
                una semana después del evento (Neuroscience Marketing Research, 2024).
              </Text>
              <Text className="editorial-text">
                • El <span className="editorial-highlight">70% de las marcas</span> no puede medir el ROI real 
                de sus activaciones experienciales.
              </Text>
              <Text className="editorial-text">
                • Los eventos genéricos generan <span className="editorial-highlight">conexiones superficiales</span> 
                que no se traducen en relaciones comerciales duraderas.
              </Text>
              <Text className="editorial-text">
                • Falta de <span className="editorial-highlight">diferenciación emocional</span> que haga 
                memorable la experiencia de marca.
              </Text>
            </Stack>
          </div>
        </Container>
      </section>

      {/* NUESTRA METODOLOGÍA - Pop-Art Cards */}
      <section className="section invert">
        <Container size="lg" className="magazine-container">
          <Title order={2} ta="center" mb="xl">
            Metodología Experiencia Memorable
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Card className="pop-animation">
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconBrain />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Neurociencia Aplicada
              </Title>
              <Text className="editorial-text" c="white">
                Diseñamos cada momento basándonos en cómo el cerebro procesa emociones, 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', marginLeft: '0.3em'}}>crea memorias</span> 
                y toma decisiones de compra.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '0.5s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconSparkles />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Tecnología Inmersiva
              </Title>
              <Text className="editorial-text" c="white">
                AR, VR, IA y sensores biométricos para crear experiencias 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>multi-sensoriales</span> 
                que amplifican el impacto emocional.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '1s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconTrendingUp />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Medición Avanzada
              </Title>
              <Text className="editorial-text" c="white">
                Métricas emocionales, engagement fisiológico y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>análisis predictivo</span> 
                para optimizar cada touchpoint en tiempo real.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </section>

      {/* TIPOS DE EXPERIENCIAS - Magazine Layout */}
      <section className="section overlay-orange">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">02</div>
              <Title order={2}>
                Portafolio de Experiencias
              </Title>
            </div>
            
            <Stack gap="lg">
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Brand Activations
                </Text>
                <Text c="white" size="sm">
                  Instalaciones interactivas que conectan emocionalmente con tu audiencia
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Product Launches
                </Text>
                <Text c="white" size="sm">
                  Lanzamientos memorables con storytelling inmersivo y tecnología
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Corporate Events
                </Text>
                <Text c="white" size="sm">
                  Eventos corporativos que fortalecen cultura y generan engagement
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Experiential Retail
                </Text>
                <Text c="white" size="sm">
                  Espacios comerciales que transforman la compra en experiencia
                </Text>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* CASOS DE ÉXITO - Warhol Style */}
      <section className="section invert">
        <div className="geometric-accent triangle" style={{ top: '20%', right: '8%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Casos de Éxito Comprobados
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Lanzamiento Tech Startup
              </Title>
              <Text className="editorial-text">
                Experiencia inmersiva con IA y realidad aumentada generó 
                <strong>340% más engagement</strong> que lanzamientos tradicionales, 
                resultando en <strong>85 leads calificados</strong> y 
                <strong>$2.3M en pipeline</strong> en 72 horas.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Activación Retail Premium
              </Title>
              <Text className="editorial-text">
                Instalación neurosensorial aumentó el 
                <strong>tiempo de permanencia 267%</strong>, 
                incrementó las ventas <strong>180%</strong> y 
                generó <strong>50,000 menciones</strong> orgánicas en redes sociales.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* MÉTRICAS - Warhol Numbers */}
      <section className="section">
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">Resultados que Hablan</Title>
          
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +240%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Recordación de marca
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                89%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Satisfacción emocional
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +160%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Conversión a ventas
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                72h
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                ROI positivo promedio
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* PROCESO - Editorial Magazine */}
      <section className="section invert">
        <div className="geometric-accent circle" style={{ top: '15%', left: '5%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Proceso de Co-Creación
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Stack gap="md">
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">01. Research Estratégico</Text>
                <Text c="white" size="sm">Análisis de audiencia, insights neurocientíficos y objetivos de marca</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">02. Concepto Creativo</Text>
                <Text c="white" size="sm">Ideación basada en emociones target y narrativa de marca</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">03. Prototipado Rápido</Text>
                <Text c="white" size="sm">Testing con usuarios reales y optimización neurométrica</Text>
              </Box>
            </Stack>
            
            <Stack gap="md">
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">04. Producción Técnica</Text>
                <Text c="white" size="sm">Desarrollo tecnológico e integración de sensores biométricos</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">05. Activación Live</Text>
                <Text c="white" size="sm">Ejecución con monitoreo en tiempo real y ajustes dinámicos</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">06. Análisis Post-Evento</Text>
                <Text c="white" size="sm">Reportes con insights accionables y recomendaciones futuras</Text>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FINAL - Editorial Style */}
      <section className="section overlay-orange">
        <div className="geometric-accent square" style={{ bottom: '20%', right: '15%' }} />
        
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">
            Convierte tu próximo evento en una 
            <br /><span className="pop-highlight">experiencia inolvidable</span>
          </Title>
          
          <Button size="xl" className="color-block">
            Diseñemos juntos →
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
