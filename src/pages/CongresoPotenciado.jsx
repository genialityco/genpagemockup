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
      {/* HERO */}
      <Container py="xl" align="center">
        <Title order={1} color="indigo">
          Congreso Potenciado by Geniality
        </Title>
        <Text mt="md" size="lg" align="center" maw={800}>
          De congresos tradicionales a <b>viajes memorables</b>.  
          Aplicamos <b>tecnología, neurociencia y storytelling inmersivo</b> 
          para activar emociones, transformar el aprendizaje y 
          garantizar <b>ROI medible</b> para sponsors, asociaciones y asistentes.
        </Text>
        <Button color="indigo" radius="xl" mt="lg" size="md">
          Diseñemos tu próximo congreso
        </Button>
      </Container>

      {/* EL PROBLEMA */}
      <Container py="xl">
        <Title order={2} mb="md">
          El Reto de los Congresos Actuales
        </Title>
        <Text>
          • Más del <b>70% de los asistentes</b> olvidan la mayor parte del contenido 
          en menos de 72 horas (Forbes, 2024). <br />
          • Los formatos tradicionales generan <b>baja participación</b> y abandono temprano. <br />
          • Sponsors invierten grandes presupuestos, pero rara vez tienen <b>métricas claras</b> de retorno. <br />
          • Los organizadores enfrentan la presión de <b>innovar sin aumentar costos</b>.
        </Text>
      </Container>

      {/* NUESTRA SOLUCIÓN */}
      <Container py="xl">
        <Title order={2} mb="lg" align="center">
          La Experiencia Potenciada
        </Title>
        <SimpleGrid cols={3} spacing="lg">
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconSparkles />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Storytelling Inmersivo
            </Text>
            <Text size="sm">
              Diseñamos narrativas que transforman el congreso en un 
              <b>viaje emocional</b>, donde cada asistente se siente protagonista.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconBrain />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Neurociencia del Recuerdo
            </Text>
            <Text size="sm">
              Usamos principios de <b>memoria y emoción</b> para que el aprendizaje 
              permanezca más allá del evento.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconChartBar />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              ROI Medible
            </Text>
            <Text size="sm">
              Métricas en tiempo real de engagement, recordación y 
              <b>valor para sponsors</b>.
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
            <b>Congresos médicos</b> con visualizaciones inmersivas, asistentes AI 
            y certificación CME integrada.
          </li>
          <li>
            <b>Convenciones empresariales</b> con experiencias interactivas que 
            refuerzan valores de marca.
          </li>
          <li>
            <b>Encuentros académicos</b> que transforman papers en 
            <b>experiencias multisensoriales</b>.
          </li>
        </ul>
      </Container>

      {/* RESULTADOS */}
      <Container py="xl" align="center">
        <Title order={2}>Impacto Medible</Title>
        <Group mt="lg" spacing="xl">
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              +60%
            </Title>
            <Text size="sm">Mayor recordación de contenidos</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              45%
            </Title>
            <Text size="sm">Incremento en engagement de asistentes</Text>
          </Card>
          <Card shadow="sm" padding="lg" maw={220}>
            <Title order={2} color="indigo">
              3x
            </Title>
            <Text size="sm">Mayor retorno para patrocinadores</Text>
          </Card>
        </Group>
      </Container>

      {/* CTA FINAL */}
      <Container py="xl" align="center">
        <Title order={2}>
          Potencia tu congreso, potencia tu impacto
        </Title>
        <Button color="indigo" radius="xl" size="lg" mt="md">
          Agenda una reunión
        </Button>
      </Container>
    </Layout>
  );
}
