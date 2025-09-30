import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import './styles/global.css'

import GenialityLanding from './pages/GenialityLanding'
import GenNetworking from './pages/GenNetworking'
import GenCampus from './pages/GenCampus'
import CongresoPotenciado from './pages/CongresoPotenciado'
import GenLive from "./pages/GenLive"
import ExperienciasInteractivas from "./pages/ExperienciasInteractivas"

const theme = createTheme({
  colors: {
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ff922b',
      '#fd7e14',
      '#e8590c',
      '#d9480f',
      '#bf400d',
      '#99350b',
    ],
    gray: [
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
      '#16181b',
    ],
  },
  primaryColor: 'orange',
  primaryShade: { light: 6, dark: 8 },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '700',
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
})

export default function App() {
  return (
    <MantineProvider theme={theme}>
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
