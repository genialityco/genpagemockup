/**Got it ✅ — you want to push this into a radical editorial style (neo-Warhol punch,
 *  pop-art halftones, orange overlays), neo-Warhol / radical editorial magazine */

import { Container, Title, Text, Group, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Logo from "../assets/LOGOS_GEN.iality_web-02.svg";
import classes from "./../Landing.module.css";

/* BusinessLine component (JSX, no TypeScript types) */
function BusinessLine({ number, title, description, link, invert }) {
  return (
    <section className={`${classes.section} ${invert ? classes.invert : ""}`}>
      {/* Background accent (visual) */}
      <div className={classes.backgroundAccent} />

      <Container size="lg" className={classes.grid}>
        {/* Left Column */}
        <div className={classes.left}>
          <span className={classes.number}>{number}</span>
          <Title order={2} className={classes.title}>
            {title}
          </Title>
        </div>

        {/* Right Column */}
        <div className={classes.right}>
          <Text size="lg" className={classes.description}>
            {description}
          </Text>
          <Anchor component={Link} to={link} className={classes.cta}>
            Descubre más →
          </Anchor>
        </div>
      </Container>
    </section>
  );
}

/* Main page */
export default function GenialityLanding() {
  return (
    <Layout>
      <main className={classes.page}>
        {/* HERO SECTION */}
        <section className={classes.hero}>
          <div className={classes.heroGrid} />
          <Container size="lg" className={classes.heroContent}>
            <img src={Logo} alt="Geniality Logo" className={classes.logo} />

            <Title order={1} className={classes.heroTitle}>
              Conocimiento & <span>Relaciones</span> que transforman
            </Title>

            <Text size="xl" className={classes.heroText}>
              En Geniality nos inspiramos en el{" "}
              <span className={classes.highlight}>poder del conocimiento</span> y
              las <span className={classes.highlight}>relaciones humanas</span>.
              Creamos plataformas, tecnología y experiencias interactivas que
              combinan <span className={classes.highlight}>tecnología</span>,{" "}
              <span className={classes.highlight}>neurociencia</span> y{" "}
              <span className={classes.highlight}>creatividad</span> para activar
              emociones y entregar resultados medibles.
            </Text>

            {/* <Group justify="center" mt="xl">
              <Anchor component={Link} to="#soluciones" className={classes.ctaBig}>
                Descubre nuestras soluciones →
              </Anchor>
              <Anchor component={Link} to="/contacto" className={classes.ctaBigAlt}>
                Agenda una reunión →
              </Anchor>
            </Group> */}
          </Container>
        </section>

        {/* BUSINESS LINES */}
        <div id="soluciones">
          <BusinessLine
            number="01"
            title="Experiencias Interactivas"
            description="De eventos comunes a recuerdos imborrables. Neurociencia, tecnología y creatividad al servicio de tu marca."
            link="/experiencias-interactivas"
          />
          <BusinessLine
            number="02"
            title="Gen.Networking"
            description="De conversaciones casuales a conexiones estratégicas con IA y analítica en tiempo real."
            link="/gen-networking"
            invert
          />
          <BusinessLine
            number="03"
            title="Gen.Campus"
            description="De mucha información a conocimientos claros y aplicables para uso y crecimiento practicos potenciado con asistentes profesionales IA y humanos globales."
            link="/gen-campus"
          />
          <BusinessLine
            number="04"
            title="Congreso Potenciado"
            description="De congresos tradicionales a experiencias memorables con storytelling, neurociencia y ROI medible."
            link="/congreso-potenciado"
            invert
          />
          <BusinessLine
            number="05"
            title="Gen.Live"
            description="De webinars pasivos a experiencias virtuales evolucionadas con agentes AI y datos accionables."
            link="/gen-live"
          />
        </div>
      </main>
    </Layout>
  );
}
