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
  Table,
} from "@mantine/core";
import {
  IconBrain,
  IconSearch,
  IconUsers,
  IconSchool,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

export default function GenCampus() {
  return (
    <Layout>
      {/* HERO */}
      <Container py="xl" align="center">
        <Title order={1} color="indigo">
          GEN.Campus
        </Title>
        <Text mt="md" size="lg" align="center" maw={800}>
          No es solo una plataforma, es un <b>asistente profesional global</b>.
          Aprovecha el conocimiento de asociaciones profesionales y el poder de
          la inteligencia artificial para <b>organizar y simplificar el saber
          global</b>. Lo hace digerible, confiable y aplicable: acompaña el
          desarrollo de habilidades humanas y técnicas, actúa como compañero de
          estudio, filtra la sobrecarga de información, conecta con expertos en
          todo el mundo y transforma el conocimiento en <b>acciones efectivas</b>.
        </Text>
        <Button color="indigo" radius="xl" mt="lg" size="md">
          Descubre GEN.Campus
        </Button>
      </Container>

      {/* EL PROBLEMA */}
      <Container py="xl">
        <Title order={2} mb="md">
          El Reto del Conocimiento Profesional
        </Title>
        <Text>
          • La <b>infoxicación</b> afecta a todos los profesionales: exceso de
          cursos, webinars, documentos y papers sin jerarquía ni relevancia.{" "}
          <br />
          • El 67% de los profesionales declara sentir <b>burnout</b> por la
          sobrecarga de información digital (Deloitte, 2024). <br />
          • La necesidad de <b>formación continua</b> es obligatoria en áreas
          como medicina, derecho, ingeniería y negocios, pero el acceso suele
          ser fragmentado y poco práctico. <br />
          • Las empresas invierten miles de millones en capacitación, pero menos
          del 20% del conocimiento se aplica en el trabajo (McKinsey, 2025).
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
              Asistente Global
            </Text>
            <Text size="sm">
              IA entrenada junto a asociaciones y gremios profesionales que
              organiza y entrega conocimiento confiable y contextualizado para
              cada carrera y rol.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconSearch />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Anti-Infoxicación
            </Text>
            <Text size="sm">
              Filtra el ruido digital y ofrece contenido verificado en segundos:
              desde papers científicos hasta normativas legales o guías técnicas.
            </Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <ThemeIcon color="indigo" size="xl">
              <IconUsers />
            </ThemeIcon>
            <Text mt="sm" weight={600}>
              Comunidad y Expertos
            </Text>
            <Text size="sm">
              Conecta profesionales y mentores de todo el mundo, fomenta
              aprendizaje entre pares y recompensa la creación de contenido
              validado.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* MERCADO */}
      <Container py="xl">
        <Title order={2} mb="md">
          Mercado y Oportunidad
        </Title>
        <Text>
          • El mercado global de educación continua y profesional superará{" "}
          <b>USD 75B en 2030</b> (HolonIQ, 2025). <br />
          • La demanda de <b>reskilling y upskilling</b> crecerá un 50% en la
          próxima década (WEF, 2024). <br />
          • En LATAM, más de <b>20 millones de profesionales</b> requieren
          certificaciones, cursos y habilidades humanas para mantenerse
          competitivos. <br />
          • GEN.Campus se convierte en el <b>copiloto de conocimiento</b> para
          todas las disciplinas.
        </Text>
      </Container>

      {/* DIFERENCIACIÓN */}
      <Container py="xl">
        <Title order={2} mb="md">
          ¿Por qué somos diferentes?
        </Title>
        <Table striped highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Plataformas tradicionales</th>
              <th>GEN.Campus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contenido</td>
              <td>Cursos genéricos</td>
              <td>Curado con asociaciones y gremios</td>
            </tr>
            <tr>
              <td>Aplicación</td>
              <td>Teoría</td>
              <td>Acción y práctica inmediata</td>
            </tr>
            <tr>
              <td>Contexto</td>
              <td>Global / Inglés</td>
              <td>Adaptado a idioma y regulaciones locales</td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td>Cursos caros</td>
              <td>Suscripción accesible + revenue sharing</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* RESULTADOS */}
      <Container py="xl" align="center">
        <Title order={2}>Resultados Esperados</Title>
        <Group mt="lg" spacing="xl">
          <Card shadow="sm" padding="lg">
            <Title order={2} color="indigo">
              +65%
            </Title>
            <Text size="sm">Mayor retención del conocimiento</Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <Title order={2} color="indigo">
              40%
            </Title>
            <Text size="sm">Reducción en tiempo de búsqueda de info</Text>
          </Card>
          <Card shadow="sm" padding="lg">
            <Title order={2} color="indigo">
              +3x
            </Title>
            <Text size="sm">Ingresos para gremios y asociaciones</Text>
          </Card>
        </Group>
      </Container>

      {/* CTA FINAL */}
      <Container py="xl" align="center">
        <Title order={2}>
          Hagamos juntos la transformación del conocimiento profesional
        </Title>
        <Button color="indigo" radius="xl" size="lg" mt="md">
          Agenda tu Demo
        </Button>
      </Container>
    </Layout>
  );
}
