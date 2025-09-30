import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  SimpleGrid,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function SolutionCard({ title, desc, link }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={4} color="indigo">
        {title}
      </Title>
      <Text mt="sm">{desc}</Text>
      <Button
        component={Link}
        to={link}
        variant="subtle"
        color="indigo"
        mt="md"
      >
        Conoce más →
      </Button>
    </Card>
  );
}

export default function GenialityLanding() {
  return (
    <Layout>
      {/* HERO */}
      <Container id="inicio" py="xl" align="center">
        <Title order={1} align="center" color="indigo">
          En Geniality creemos en el poder del conocimiento y las relaciones
          humanas
        </Title>
        <Text size="lg" mt="md" align="center" maw={900}>
          Hemos verificado que son los <b>pilares que permiten superar cualquier
          obstáculo</b>. Hoy, acceder a información valiosa y conectar con las
          personas correctas es más difícil que nunca.  
          <br />
          <br />
          Por eso creamos <b>plataformas, tecnología y experiencias
          interactivas</b> que combinan <b>tecnología, neurociencia y
          creatividad</b> para activar emociones, generar memorias imborrables y
          entregar <b>resultados medibles</b>.
        </Text>
        <Group mt="xl" position="center">
          <Button
            component="a"
            href="#soluciones"
            color="indigo"
            radius="xl"
            size="md"
          >
            Descubre nuestras soluciones
          </Button>
          <Button
            component="a"
            href="#contacto"
            variant="outline"
            color="indigo"
            radius="xl"
            size="md"
          >
            Agenda una reunión
          </Button>
        </Group>
      </Container>

      {/* OFERTA DE VALOR */}
      <Container py="xl" align="center">
        <Title order={2}>Nuestra Promesa</Title>
        <Text mt="md" maw={800}>
          Con Geniality, los eventos, el conocimiento y los contactos no son un gasto: se convierten en{" "}
          <b>conexiones estratégicas, aprendizaje aplicado y un ROI real</b> para
          marcas, asociaciones y asistentes.
        </Text>
      </Container>

      {/* LÍNEAS DE NEGOCIO */}
      <Container id="soluciones" py="xl">
        <Title order={2} align="center" mb="lg">
          Nuestras Líneas de Negocio
        </Title>
        <SimpleGrid cols={2} spacing="lg">
          <SolutionCard
            title="Experiencias Interactivas"
            desc="De eventos comunes a recuerdos imborrables. Neurociencia, tecnología y creatividad al servicio de tu marca."
            link="/experiencias-interactivas"
          />
          <SolutionCard
            title="Gen.Networking"
            desc="De conversaciones casuales a conexiones estratégicas con IA y analítica en tiempo real."
            link="/gen-networking"
          />
          <SolutionCard
            title="Gen.Campus"
            desc="De la infoxicación al conocimiento claro y aplicable con un asistente profesional global."
            link="/gen-campus"
          />
          <SolutionCard
            title="Congreso Potenciado"
            desc="De congresos tradicionales a experiencias memorables con storytelling, neurociencia y ROI medible."
            link="/congreso-potenciado"
          />
          <SolutionCard
            title="Gen.Live"
            desc="De webinars pasivos a experiencias virtuales evolucionadas con agentes AI y datos accionables."
            link="/gen-live"
          />
        </SimpleGrid>
      </Container>

      {/* CONTACTO */}
      <Container id="contacto" py="xl" align="center">
        <Title order={2}>Hablemos de tu próximo evento</Title>
        <form style={{ maxWidth: 500, margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Nombre"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            placeholder="Cuéntanos tu interés"
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <Button type="submit" color="indigo" radius="xl" mt="md">
            Enviar
          </Button>
        </form>
      </Container>
    </Layout>
  );
}
