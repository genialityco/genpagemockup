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
  IconDeviceGamepad,
  IconPhoto,
  IconRobot,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function ExperienciasInteractivas() {
  return (
    <Layout>
      {/* HERO */}
      <Container py="xl" align="center">
        <Title order={1} color="indigo">
          Experiencias Interactivas by Geniality
        </Title>
        <Text mt="md" size="lg" align="center" maw={800}>
          Multiplicamos el impacto de tu marca con{" "}
          <b>arquitectura de experiencias</b>: interacciones diseñadas con
          neurociencia, emociones y tecnología inmersiva que generan
          <b> memorias significativas</b> y resultados medibles en cada evento.
        </Text>
        <Button color="indigo" radius="xl" mt="lg" size="md">
          Diseña tu experiencia con nosotros
        </Button>
      </Container>

      {/* QUÉ SOMOS */}
      <Container py="xl">
        <Title order={2} mb="md">
          Arquitectura de Experiencias
        </Title>
        <Text>
          Cada cerebro interpreta la información según su historia, estado de
          ánimo y contexto. Por eso diseñamos{" "}
          <b>entornos, interacciones y estímulos</b> que no solo comunican un
          mensaje, sino que provocan vivencias recordadas, compartidas y
          transformadoras.  
          <br />  
          Combinamos <b>psicología cognitiva, neurociencia, diseño sensorial e
          interacción tecnológica</b> para lograr que tu evento sea
          inolvidable.
        </Text>
      </Container>

      {/* LÍNEAS DE EXPERIENCIA */}
      <Container py="xl">
        <Title order={2} mb="lg" align="center">
          Nuestras Experiencias Destacadas
        </Title>
        <SimpleGrid cols={3} spacing="lg">
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconRobot />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Robots & AI Hosts
            </Text>
            <Text size="sm">
              Robots autónomos con IA que reconocen rostros, conversan y crean
              interacciones memorables con asistentes en congresos y ferias.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconDeviceGamepad />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Juegos Inmersivos
            </Text>
            <Text size="sm">
              Dinámicas masivas, retos de gamificación y experiencias colectivas
              que transforman la capacitación y el engagement en diversión con
              propósito.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconPhoto />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Photo Experiences
            </Text>
            <Text size="sm">
              Photobooths inteligentes, PhotoROBOTs y experiencias de recuerdo
              que amplifican la visibilidad de marca en redes sociales.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* CASOS DE ÉXITO */}
      <Container py="xl">
        <Title order={2} mb="md">
          Resultados Reales
        </Title>
        <ul>
          <li>
            <b>+140% aumento de inscripciones</b> en congresos con experiencias
            interactivas comparado con versiones previas.
          </li>
          <li>
            <b>+75% visitas en zonas clave</b> como posters académicos gracias a
            dinámicas inmersivas.
          </li>
          <li>
            <b>30% más patrocinios</b> para asociaciones y organizadores al
            ofrecer activaciones interactivas de marca.
          </li>
          <li>
            Nuevos canales de ingreso: campus virtuales, campañas híbridas y
            entrenamientos gamificados.
          </li>
        </ul>
      </Container>

      {/* EJEMPLOS DESTACADOS */}
      <Container py="xl">
        <Title order={2} mb="md">
          Ejemplos de Experiencias
        </Title>
        <SimpleGrid cols={2} spacing="lg">
          <Card shadow="sm" padding="lg">
            <Text weight={600}>Desafiando el Cáncer</Text>
            <Text size="sm">
              Pulmón virtual interactivo donde miles de asistentes colaboraron
              desde sus móviles para “desintegrar” células de cáncer en tiempo
              real.  
              <i> Simposio internacional, 2024.</i>
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <Text weight={600}>Royal Enfield Test-Drive Inmersivo</Text>
            <Text size="sm">
              Motociclistas con cascos GoPro y sensores de ritmo cardíaco,
              transmitiendo la emoción en vivo a redes sociales. Una activación
              única de marca.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* CTA FINAL */}
      <Container py="xl" align="center">
        <Title order={2}>
          Hagamos que tu evento sea inolvidable
        </Title>
        <Button color="indigo" radius="xl" size="lg" mt="md">
          Agenda una reunión
        </Button>
      </Container>
    </Layout>
  );
}
