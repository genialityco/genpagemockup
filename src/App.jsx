import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import GenialityLanding from './pages/GenialityLanding'
import GenNetworking from './pages/GenNetworking'
import GenCampus from './pages/GenCampus'
import CongresoPotenciado from './pages/CongresoPotenciado'
import GenLive from "./pages/GenLive"
import ExperienciasInteractivas from "./pages/ExperienciasInteractivas"

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<GenialityLanding />} />
          <Route path="/gen-networking" element={<GenNetworking />} />
          <Route path="/gen-campus" element={<GenCampus />} />
          <Route path="/congreso-potenciado" element={<CongresoPotenciado />} />
          <Route path="/gen-live" element={<GenLive />} />
          <Route
            path="/experiencias-interactivas"
            element={<ExperienciasInteractivas />}
          />
        </Routes>
      </Router>
    </MantineProvider>
  )
}
