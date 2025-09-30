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
  List,
} from "@mantine/core";
import {
  IconVideo,
  IconBrain,
  IconUsers,
  IconChartBar,
  IconRobot,
  IconBolt,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function GenLive() {
  return (
    <Layout>
      {/* HERO - Neo-Warhol Style */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="geometric-accent circle" style={{ top: '12%', left: '8%' }} />
        <div className="geometric-accent triangle" style={{ bottom: '18%', right: '12%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <Stack gap="xl">
              <div className="big-number" style={{ top: '-50px', left: '-20px' }}>05</div>
              
              <Title order={1}>
                Gen.<span className="pop-highlight">Live</span>
              </Title>
              
              <Text className="editorial-text">
                De webinars pasivos a <span className="editorial-highlight">experiencias virtuales evolucionadas</span>.  
                Plataforma de eventos digitales potenciada con <span className="editorial-highlight">agentes IA</span>, 
                <span className="editorial-highlight">interacciones inmersivas</span> y 
                <span className="editorial-highlight">datos accionables</span> 
                que transforman espectadores en participantes activos y generan resultados medibles.
              </Text>
              
              <Group>
                <Button className="color-block">
                  Evoluciona tus eventos →
                </Button>
              </Group>
            </Stack>
            
            <Box className="halftone-bg overlay-orange" style={{ height: '400px', borderRadius: '8px', position: 'relative' }}>
              <div className="geometric-accent square" style={{ top: '20%', left: '25%', opacity: 0.7 }} />
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
                La Crisis de los Eventos Virtuales
              </Title>
            </div>
            
            <Stack gap="md">
              <Text className="editorial-text">
                • El <span className="editorial-highlight">68% de los asistentes</span> abandona webinars 
                tradicionales en los primeros 15 minutos (Virtual Events Institute, 2024).
              </Text>
              <Text className="editorial-text">
                • Solo el <span className="editorial-highlight">15% participa activamente</span> en Q&A 
                y dinámicas interactivas durante eventos virtuales.
              </Text>
              <Text className="editorial-text">
                • Las empresas no logran <span className="editorial-highlight">medir ROI efectivo</span> 
                de sus inversiones en eventos digitales.
              </Text>
              <Text className="editorial-text">
                • Falta de <span className="editorial-highlight">personalización</span> y seguimiento 
                post-evento para convertir audiencias en clientes.
              </Text>
            </Stack>
          </div>
        </Container>
      </section>

      {/* NUESTRA SOLUCIÓN - Pop-Art Cards */}
      <section className="section invert">
        <Container size="lg" className="magazine-container">
          <Title order={2} ta="center" mb="xl">
            Tecnología de Eventos Evolucionados
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
                Agentes IA Conversacionales
              </Title>
              <Text className="editorial-text" c="white">
                IA especializada que facilita networking, responde preguntas técnicas y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', marginLeft: '0.3em'}}>personaliza contenido</span> 
                en tiempo real para cada asistente.
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
                Interacciones Inmersivas
              </Title>
              <Text className="editorial-text" c="white">
                Gamificación inteligente, polls neurométricos y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>breakout rooms</span> 
                adaptativos que mantienen engagement del 90%+.
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
                Analytics Predictivos
              </Title>
              <Text className="editorial-text" c="white">
                Métricas de atención, sentiment analysis y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em', margin: '0 0.3em'}}>lead scoring</span> 
                automático para optimización en tiempo real.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </section>

      {/* CARACTERÍSTICAS - Magazine Layout */}
      <section className="section overlay-orange">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">02</div>
              <Title order={2}>
                Funcionalidades Revolucionarias
              </Title>
            </div>
            
            <Stack gap="lg">
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Smart Networking
                </Text>
                <Text c="white" size="sm">
                  IA que conecta automáticamente participantes con intereses y objetivos afines
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Dynamic Content
                </Text>
                <Text c="white" size="sm">
                  Contenido que se adapta en tiempo real según el engagement de la audiencia
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Immersive Experiences
                </Text>
                <Text c="white" size="sm">
                  AR/VR integrado, espacios 3D y simulaciones interactivas
                </Text>
              </div>
              
              <div className="color-block">
                <Text c="white" fw={900} tt="uppercase" mb="xs">
                  Post-Event Intelligence
                </Text>
                <Text c="white" size="sm">
                  Seguimiento automatizado y nurturing personalizado de leads
                </Text>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* TIPOS DE EVENTOS - Warhol Style */}
      <section className="section invert">
        <div className="geometric-accent triangle" style={{ top: '20%', right: '5%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Portafolio de Eventos Evolucionados
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Webinars Inteligentes
              </Title>
              <Text className="editorial-text">
                Presentaciones adaptativas con IA que ajusta contenido según 
                <strong>perfil de audiencia</strong>, mantiene engagement del 
                <strong>90%+</strong> y genera <strong>3x más leads calificados</strong>.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Congresos Virtuales
              </Title>
              <Text className="editorial-text">
                Eventos multi-día con networking IA, sponsors inteligentes y 
                <strong>métricas avanzadas</strong> que superan eventos presenciales 
                en <strong>satisfacción</strong> y <strong>ROI</strong>.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Training Inmersivo
              </Title>
              <Text className="editorial-text">
                Capacitaciones con simuladores, evaluación neurométrica y 
                <strong>certificaciones adaptativas</strong> que mejoran retención 
                de conocimiento en <strong>240%</strong>.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Product Launches
              </Title>
              <Text className="editorial-text">
                Lanzamientos con experiencias inmersivas, demos interactivos y 
                <strong>scoring automático</strong> de prospects para equipos de ventas.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* RESULTADOS - Warhol Numbers */}
      <section className="section">
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">Resultados Transformadores</Title>
          
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +320%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Engagement promedio
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                87%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Completación de eventos
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                +180%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Generación de leads
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="4rem" className="pop-highlight" mb="md">
                92%
              </Title>
              <Text size="lg" fw={900} tt="uppercase">
                Satisfacción NPS
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* PROCESO - Editorial Magazine */}
      <section className="section invert">
        <div className="geometric-accent circle" style={{ top: '10%', left: '12%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Metodología de Implementación
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Stack gap="md">
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">01. Estrategia Digital</Text>
                <Text c="white" size="sm">Análisis de audiencia y diseño de experiencia personalizada</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">02. Setup Tecnológico</Text>
                <Text c="white" size="sm">Configuración de IA, integraciones y testing de plataforma</Text>
              </Box>
            </Stack>
            
            <Stack gap="md">
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">03. Contenido Adaptativo</Text>
                <Text c="white" size="sm">Desarrollo de material dinámico y experiencias inmersivas</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">04. Ejecución Live</Text>
                <Text c="white" size="sm">Evento con monitoreo en tiempo real y optimización IA</Text>
              </Box>
            </Stack>
            
            <Stack gap="md">
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">05. Analytics Post-Evento</Text>
                <Text c="white" size="sm">Reportes inteligentes y recomendaciones de follow-up</Text>
              </Box>
              
              <Box className="color-block">
                <Text c="white" fw={900} size="lg" mb="xs">06. Optimización Continua</Text>
                <Text c="white" size="sm">Machine learning para mejorar eventos futuros</Text>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </section>

      {/* CASOS DE ÉXITO - Warhol Style */}
      <section className="section overlay-orange">
        <div className="geometric-accent square" style={{ bottom: '25%', right: '10%' }} />
        
        <Container size="lg" className="magazine-container">
          <Title order={2} mb="xl" ta="center">
            Casos de Éxito Comprobados
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Global SaaS Conference
              </Title>
              <Text className="editorial-text">
                Evento virtual de 3 días con <strong>12,000 asistentes globales</strong>. 
                El networking IA generó <strong>2,400 reuniones comerciales</strong> 
                programadas y <strong>$8.5M en pipeline</strong> en 30 días post-evento.
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={3} className="pop-highlight" mb="md">
                Corporate Training Series
              </Title>
              <Text className="editorial-text">
                Programa de capacitación inmersiva que incrementó 
                <strong>retención de conocimiento 240%</strong>, 
                redujo <strong>tiempo de onboarding 60%</strong> y 
                mejoró <strong>performance 85%</strong>.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FINAL - Editorial Style */}
      <section className="section invert">
        <div className="geometric-accent triangle" style={{ top: '30%', left: '15%' }} />
        
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl" c="white">
            Convierte tus eventos virtuales en 
            <br /><span className="pop-highlight">experiencias inolvidables</span>
          </Title>
          
          <Button size="xl" className="color-block">
            Evoluciona tu próximo evento →
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
