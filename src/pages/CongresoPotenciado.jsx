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
  IconUsers,
  IconPresentation,
  IconChartBar,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function CongresoPotenciado() {
  return (
    <Layout>
      {/* HERO - Neo-Warhol Style */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="geometric-accent circle" style={{ top: '5%', left: '5%' }} />
        <div className="geometric-accent triangle" style={{ bottom: '10%', right: '15%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <Stack gap="xl">
              <div className="big-number" style={{ top: '-50px', left: '-20px' }}>04</div>
              
              <Title order={1}>
                Congreso <span className="pop-highlight">Potenciado</span>
              </Title>
              
              <Text className="editorial-text">
                De congresos tradicionales a <span className="editorial-highlight">viajes memorables</span>.  
                Aplicamos <span className="editorial-highlight">tecnología</span>, 
                <span className="editorial-highlight">neurociencia</span> y 
                <span className="editorial-highlight">storytelling inmersivo</span> 
                para que cada congreso profesional genere impacto duradero, 
                <span className="editorial-highlight">conexiones estratégicas</span> y 
                <span className="editorial-highlight">ROI medible</span> para todas las partes involucradas.
              </Text>
              
              <Group>
                <Button className="color-block">
                  Potencia tu congreso →
                </Button>
              </Group>
            </Stack>
            
            <Box className="halftone-bg overlay-orange" style={{ height: '400px', borderRadius: '8px', position: 'relative' }}>
              <div className="geometric-accent square" style={{ top: '20%', left: '25%', opacity: 0.4 }} />
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
                El Desafío de los Congresos Tradicionales
              </Title>
            </div>
            
            <Stack gap="md">
              <Text className="editorial-text">
                • Solo el <span className="editorial-highlight">20% de los asistentes</span> considera que un congreso tradicional 
                cumple completamente sus expectativas (EventMB Survey, 2024).
              </Text>
              <Text className="editorial-text">
                • El <span className="editorial-highlight">networking espontáneo</span> depende del azar y muchas oportunidades se pierden.
              </Text>
              <Text className="editorial-text">
                • Los <span className="editorial-highlight">sponsors</span> invierten grandes sumas sin métricas claras de retorno.
              </Text>
              <Text className="editorial-text">
                • Falta de <span className="editorial-highlight">diferenciación</span> entre congresos del mismo sector.
              </Text>
            </Stack>
          </div>
        </Container>
      </section>

      {/* NUESTRA SOLUCIÓN - Pop-Art Cards */}
      <section className="section invert">
        <Container size="lg" className="magazine-container">
          <Title order={2} ta="center" mb="xl">
            Metodología Congreso Potenciado
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Card className="pop-animation">
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconSparkles />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Storytelling Científico
              </Title>
              <Text className="editorial-text" c="white">
                Transformamos información técnica en 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', marginLeft: '0.3em'}}>narrativas memorables</span> 
                usando neurociencia cognitiva y técnicas de persuasión ética.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '0.5s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconBrain />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Experiencias Inmersivas
              </Title>
              <Text className="editorial-text" c="white">
                Ambientes y dinámicas diseñadas para activar emociones específicas, 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>mejorar la retención</span> 
                y facilitar el aprendizaje aplicado.
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
                ROI Medible
              </Title>
              <Text className="editorial-text" c="white">
                Métricas avanzadas de 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>engagement</span>, 
                networking efectivo, satisfacción y resultados tangibles para 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', marginLeft: '0.3em'}}>sponsors y organizadores</span>.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </section>

      {/* FASES DEL PROCESO - Magazine Layout */}
      <section className="section overlay-orange">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">02</div>
              <Title order={2}>
                Proceso de Transformación
              </Title>
            </div>
            
            <Stack gap="lg">
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  01. Análisis Estratégico
                </Text>
                <Text c="white" size="sm">
                  Evaluación de audiencia, objetivos y oportunidades de diferenciación
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  02. Diseño de Experiencia
                </Text>
                <Text c="white" size="sm">
                  Arquitectura de momentos memorables basada en neurociencia
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  03. Activación Tecnológica
                </Text>
                <Text c="white" size="sm">
                  Implementación de IA, gamificación y herramientas de networking
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  04. Medición y Optimización
                </Text>
                <Text c="white" size="sm">
                  Análisis en tiempo real y reportes post-evento con insights accionables
                </Text>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* RESULTADOS - Warhol Numbers */}
      <section className="section invert">
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">Resultados Comprobados</Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                +140%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Incremento en inscripciones año tras año
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                92%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Satisfacción de sponsors con ROI
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                +300%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Conexiones de valor generadas
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* CASOS DE ÉXITO - Warhol Style */}
      <section className="section">
        <div className="geometric-accent triangle" style={{ top: '15%', right: '5%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Casos de Éxito
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Congreso Nacional de Cardiología
              </Title>
              <Text className="editorial-text">
                Implementamos experiencias inmersivas con simuladores de realidad virtual 
                para procedimientos cardíacos, aumentando la participación en talleres un 
                <strong>250%</strong> y generando <strong>45 conexiones comerciales</strong> directas para sponsors.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Summit Internacional de FinTech
              </Title>
              <Text className="editorial-text">
                Networking inteligente con IA y gamificación resultó en 
                <strong>180 reuniones comerciales</strong> programadas y un 
                <strong>NPS de 87</strong> entre asistentes, el más alto en la historia del evento.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FINAL - Editorial Style */}
      <section className="section invert">
        <div className="geometric-accent circle" style={{ top: '25%', left: '10%' }} />
        
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl" c="white">
            Transforma tu próximo congreso en una 
            <br /><span className="pop-highlight">experiencia inolvidable</span>
          </Title>
          
          <Button size="xl" className="color-block">
            Solicita una consultoría →
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
