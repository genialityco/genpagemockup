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
      {/* HERO */}
      <Container py="xl" align="center">
        <Title order={1} color="indigo">
          GEN.Networking
        </Title>
        <Text mt="md" size="lg" align="center" maw={800}>
          De encuentros casuales a <b>conexiones estratégicas</b>. 
          GEN.Networking utiliza <b>inteligencia artificial, neurociencia y analítica en tiempo real</b> 
          para que cada conversación en un evento tenga propósito, emoción y retorno de inversión.
        </Text>
        <Button color="indigo" radius="xl" mt="lg" size="md">
          Solicita una Demo
        </Button>
      </Container>

      {/* EL PROBLEMA */}
      <Container py="xl">
        <Title order={2} mb="md">
          El Reto del Networking Profesional
        </Title>
        <Text>
          • En eventos y ferias, más del <b>80% de los contactos</b> no generan valor real (EventMB, 2024). <br />
          • El networking tradicional depende del azar y la suerte de coincidir. <br />
          • Las marcas invierten grandes presupuestos, pero carecen de <b>trazabilidad</b> y métricas claras sobre resultados. <br />
          • Los asistentes se sienten abrumados, sin claridad sobre con quién deberían hablar primero.
        </Text>
      </Container>

      {/* NUESTRA SOLUCIÓN */}
      <Container py="xl">
        <Title order={2} mb="lg" align="center">
          Nuestra Propuesta Diferenciadora
        </Title>
        <SimpleGrid cols={3} spacing="lg">
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconBrain />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Matchmaking Inteligente
            </Text>
            <Text size="sm">
              Algoritmos de IA que analizan perfiles, intereses y objetivos para 
              crear <b>conexiones estratégicas</b> en lugar de reuniones al azar.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconAnalyze />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Neurociencia Aplicada
            </Text>
            <Text size="sm">
              Diseñamos encuentros que activan motivadores humanos (confianza, logro, exclusividad), 
              garantizando interacciones memorables.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconDeviceAnalytics />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              ROI en Tiempo Real
            </Text>
            <Text size="sm">
              Reportes inmediatos de leads, calidad de conexiones, engagement y oportunidades 
              generadas para sponsors y organizadores.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* CASOS DE USO */}
      <Container py="xl">
        <Title order={2} mb="md">
          Casos de Uso
        </Title>
        <ul>
          <li>
            <b>Ruedas de negocio sectoriales</b> con emparejamiento automático 
            según oferta y demanda.
          </li>
          <li>
            <b>Convenciones corporativas</b> con agendas personalizadas y 
            networking gamificado.
          </li>
          <li>
            <b>Ferias internacionales</b> con asistentes multilingües y métricas 
            de impacto en tiempo real.
          </li>
        </ul>
      </Container>

      {/* RESULTADOS */}
      <Container py="xl" align="center">
        <Title order={2}>Impacto Real</Title>
        <Group mt="lg" spacing="xl">
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              +250%
            </Title>
            <Text size="sm">Incremento en conexiones de valor</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              70%
            </Title>
            <Text size="sm">Sponsors con ROI positivo medido</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              95%
            </Title>
            <Text size="sm">Satisfacción de asistentes en networking</Text>
          </Card>
        </Group>
      </Container>

      {/* CTA FINAL */}
      <Container py="xl" align="center">
        <Title order={2}>
          Convierte cada encuentro en una oportunidad estratégica
        </Title>
        <Button color="indigo" radius="xl" size="lg" mt="md">
          Agenda tu Demo
        </Button>
      </Container>
    </Layout>
  );
}
