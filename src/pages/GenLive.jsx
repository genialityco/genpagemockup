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
  IconRobot,
  IconUsers,
  IconPresentationAnalytics,
  IconMessageChatbot,
  IconGauge,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function AgenteAI() {
  return (
    <Layout>
      {/* HERO */}
      <Container py="xl" align="center">
        <Title order={1} color="indigo">
          Gen.Live – Eventos Virtuales Evolucionados
        </Title>
        <Text mt="md" size="lg" align="center" maw={800}>
          De webinars pasivos a <b>experiencias activas y memorables</b>.  
          Gen.Live combina <b>IA, neurociencia y diseño interactivo</b> para 
          transformar los eventos virtuales en espacios de aprendizaje, conexión 
          y resultados medibles.
        </Text>
        <Button color="indigo" radius="xl" mt="lg" size="md">
          Evoluciona tu próximo evento virtual
        </Button>
      </Container>

      {/* EL PROBLEMA */}
      <Container py="xl">
        <Title order={2} mb="md">
          El Reto de los Eventos Virtuales
        </Title>
        <Text>
          • El <b>68% de los asistentes</b> abandona un webinar en los primeros 15 minutos (EventMB, 2024). <br />
          • Los formatos virtuales actuales generan <b>bajo engagement</b> y cero participación real. <br />
          • Organizadores y sponsors carecen de <b>datos útiles</b> más allá de la asistencia. <br />
          • La mayoría de plataformas se limita a ser un escenario de transmisión unidireccional.
        </Text>
      </Container>

      {/* NUESTRA SOLUCIÓN */}
      <Container py="xl">
        <Title order={2} mb="lg" align="center">
          ¿Qué hace diferente a Gen.Live?
        </Title>
        <SimpleGrid cols={3} spacing="lg">
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconMessageChatbot />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Agentes AI en Vivo
            </Text>
            <Text size="sm">
              Responden preguntas en tiempo real, personalizan contenidos y
              mantienen el interés de cada asistente como un <b>compañero cognitivo</b>.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconUsers />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Interacción Humana Real
            </Text>
            <Text size="sm">
              Networking virtual, salas interactivas y dinámicas gamificadas que
              transforman espectadores en participantes activos.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconPresentationAnalytics />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Datos y ROI Medibles
            </Text>
            <Text size="sm">
              Analítica avanzada: nivel de atención, interacción, satisfacción
              y <b>conversiones de negocio</b>.
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
            <b>Lanzamientos de producto</b> con asistentes AI que responden
            dudas técnicas y comerciales en tiempo real.
          </li>
          <li>
            <b>Congresos virtuales</b> con dinámicas interactivas y networking 
            estratégico entre asistentes.
          </li>
          <li>
            <b>Programas de formación online</b> donde la IA personaliza la 
            experiencia de aprendizaje y mide la retención.
          </li>
        </ul>
      </Container>

      {/* RESULTADOS */}
      <Container py="xl" align="center">
        <Title order={2}>Impacto de Gen.Live</Title>
        <Group mt="lg" spacing="xl">
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              +55%
            </Title>
            <Text size="sm">Mayor permanencia en sesiones virtuales</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              3x
            </Title>
            <Text size="sm">Incremento en interacciones de asistentes</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              80%
            </Title>
            <Text size="sm">Organizadores reportan ROI positivo</Text>
          </Card>
        </Group>
      </Container>

      {/* CTA FINAL */}
      <Container py="xl" align="center">
        <Title order={2}>
          Evoluciona tus eventos virtuales con Gen.Live
        </Title>
        <Button color="indigo" radius="xl" size="lg" mt="md">
          Solicita una demo
        </Button>
      </Container>
    </Layout>
  );
}
