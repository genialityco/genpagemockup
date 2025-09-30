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
  IconUsers,
  IconChartLine,
  IconBrain,
  IconAnalyze,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function GenNetworking() {
  return (
    <Layout>
      {/* HERO - Neo-Warhol Style */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="geometric-accent triangle" style={{ top: '10%', left: '10%' }} />
        <div className="geometric-accent circle" style={{ bottom: '15%', right: '15%' }} />
        
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <Stack gap="xl">
              <div className="big-number" style={{ top: '-50px', left: '-20px' }}>02</div>
              
              <Title order={1}>
                Gen.<span className="pop-highlight">Networking</span>
              </Title>
              
              <Text className="editorial-text">
                De encuentros casuales a <span className="editorial-highlight">conexiones estratégicas</span>. 
                Gen.Networking utiliza <span className="editorial-highlight">inteligencia artificial</span>, 
                <span className="editorial-highlight">neurociencia</span> y 
                <span className="editorial-highlight">analítica en tiempo real</span> 
                para que cada conversación en un evento tenga propósito, emoción y retorno de inversión.
              </Text>
              
              <Group>
                <Button className="color-block">
                  Solicita una Demo →
                </Button>
              </Group>
            </Stack>
            
            <Box className="halftone-bg" style={{ height: '400px', borderRadius: '8px' }} />
          </div>
        </Container>
      </section>

      {/* EL PROBLEMA - Editorial Style */}
      <section className="section overlay-orange">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">01</div>
              <Title order={2}>
                El Reto del Networking Profesional
              </Title>
            </div>
            
            <Stack gap="md">
              <Text className="editorial-text">
                • En eventos y ferias, más del <span className="editorial-highlight">80% de los contactos</span> no generan valor real (EventMB, 2024).
              </Text>
              <Text className="editorial-text">
                • El networking tradicional depende del <span className="editorial-highlight">azar y la suerte</span> de coincidir.
              </Text>
              <Text className="editorial-text">
                • Las marcas invierten grandes presupuestos, pero carecen de <span className="editorial-highlight">trazabilidad</span> y métricas claras.
              </Text>
              <Text className="editorial-text">
                • Los asistentes se sienten <span className="editorial-highlight">abrumados</span>, sin claridad sobre con quién deberían hablar primero.
              </Text>
            </Stack>
          </div>
        </Container>
      </section>

      {/* NUESTRA SOLUCIÓN - Pop-Art Cards */}
      <section className="section invert">
        <Container size="lg" className="magazine-container">
          <Title order={2} ta="center" mb="xl">
            Nuestra Propuesta Diferenciadora
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
                Matchmaking Inteligente
              </Title>
              <Text className="editorial-text" c="white">
                Algoritmos de IA que analizan perfiles, intereses y objetivos para 
                crear <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em'}}>conexiones estratégicas</span> en lugar de reuniones al azar.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '0.5s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconAnalyze />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                Neurociencia Aplicada
              </Title>
              <Text className="editorial-text" c="white">
                Diseñamos encuentros que activan <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em'}}>motivadores humanos</span> 
                (confianza, logro, exclusividad), garantizando interacciones memorables.
              </Text>
            </Card>
            
            <Card className="pop-animation" style={{ animationDelay: '1s' }}>
              <ThemeIcon 
                color="orange" 
                size="xl" 
                className="color-block"
                style={{ marginBottom: '1rem' }}
              >
                <IconDeviceAnalytics />
              </ThemeIcon>
              <Title order={3} c="white" mb="sm">
                ROI en Tiempo Real
              </Title>
              <Text className="editorial-text" c="white">
                Reportes inmediatos de leads, calidad de conexiones, engagement y 
                <span style={{background: '#fff', color: '#000', padding: '0.1em 0.3em'}}>oportunidades generadas</span> 
                para sponsors y organizadores.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </section>

      {/* CASOS DE USO - Magazine Layout */}
      <section className="section">
        <Container size="lg" className="magazine-container">
          <div className="pop-grid">
            <div>
              <div className="pop-number">03</div>
              <Title order={2}>
                Casos de Uso
              </Title>
            </div>
            
            <Stack gap="lg">
              <div className="color-block">
                <Title order={4} c="white" mb="xs">Ruedas de Negocio Sectoriales</Title>
                <Text c="white">
                  Emparejamiento automático según oferta y demanda
                </Text>
              </div>
              
              <div className="color-block">
                <Title order={4} c="white" mb="xs">Convenciones Corporativas</Title>
                <Text c="white">
                  Agendas personalizadas y networking gamificado
                </Text>
              </div>
              
              <div className="color-block">
                <Title order={4} c="white" mb="xs">Ferias Internacionales</Title>
                <Text c="white">
                  Asistentes multilingües y métricas de impacto en tiempo real
                </Text>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* RESULTADOS - Warhol Numbers */}
      <section className="section invert">
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">Impacto Real</Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                +250%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Incremento en conexiones de valor
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                70%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Sponsors con ROI positivo medido
              </Text>
            </Box>
            
            <Box className="print-style">
              <Title order={1} size="5rem" className="pop-highlight" mb="md">
                95%
              </Title>
              <Text size="lg" fw={900} tt="uppercase" c="white">
                Satisfacción de asistentes
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FINAL - Editorial Style */}
      <section className="section">
        <div className="geometric-accent square" style={{ top: '20%', right: '10%' }} />
        
        <Container size="lg" className="magazine-container" ta="center">
          <Title order={2} mb="xl">
            Convierte cada encuentro en una 
            <br /><span className="pop-highlight">oportunidad estratégica</span>
          </Title>
          
          <Button size="xl" className="color-block">
            Agenda tu Demo →
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
