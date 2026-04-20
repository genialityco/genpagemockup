import React from 'react';

const PoliticasPrivacidad = () => {
  // Estilos básicos en objetos para mantener el orden
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px'
    },
    header: {
      textAlign: 'center',
      borderBottom: '2px solid #0056b3',
      marginBottom: '30px',
      paddingBottom: '10px'
    },
    title: {
      color: '#0056b3',
      margin: '0'
    },
    sectionTitle: {
      color: '#222',
      borderLeft: '4px solid #0056b3',
      paddingLeft: '10px',
      marginTop: '25px',
      fontSize: '1.2rem'
    },
    list: {
      paddingLeft: '20px'
    },
    contactCard: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #0056b3',
      borderRadius: '5px'
    },
    footerText: {
      fontSize: '0.9rem',
      color: '#555'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Políticas de Privacidad</h1>
        <p><strong>Gen.iality</strong> - Ley 1581 de 2012</p>
      </header>

      <section>
        <p>
          En <strong>Gen.iality</strong>, nos comprometemos a proteger la privacidad y la seguridad de los datos personales de nuestros clientes. Esta Política describe cómo recopilamos, utilizamos, divulgamos y protegemos su información personal.
        </p>
        <p><em>Al acceder o utilizar nuestros servicios, usted acepta los términos de esta Política de Privacidad.</em></p>
      </section>

      <h2 style={styles.sectionTitle}>1. Información que Recopilamos</h2>
      <ul style={styles.list}>
        <li><strong>Información Personal:</strong> nombre, email, teléfono, dirección física.</li>
        <li><strong>Información de la plataforma:</strong> datos de inicio de sesión y detalles de cuenta.</li>
        <li><strong>Información de Uso:</strong> actividad y preferencias en la plataforma.</li>
        <li><strong>Información Técnica:</strong> dirección IP, navegador y registros de fecha/hora.</li>
      </ul>

      <h2 style={styles.sectionTitle}>2. Uso de la Información</h2>
      <p>Utilizamos la información para:</p>
      <ul style={styles.list}>
        <li>Proveer y mantener nuestros servicios.</li>
        <li>Procesar transacciones y facturación.</li>
        <li>Enviar comunicaciones de soporte y marketing (con consentimiento).</li>
        <li>Prevenir fraudes y problemas de seguridad.</li>
      </ul>

      <h2 style={styles.sectionTitle}>3. Divulgación de la Información</h2>
      <p>Compartimos información solo con proveedores de servicios esenciales, por requisitos legales o cuando usted otorgue su consentimiento expreso.</p>

      <h2 style={styles.sectionTitle}>4. Seguridad y Retención</h2>
      <p>Implementamos medidas de seguridad para proteger sus datos. Los retendremos solo durante el tiempo necesario para cumplir con fines legales o de servicio.</p>

      <h2 style={styles.sectionTitle}>5. Sus Derechos</h2>
      <p>Usted puede acceder, corregir, actualizar o solicitar la eliminación de su información contactándonos directamente.</p>

      <h2 style={styles.sectionTitle}>6. Cambios en la Política</h2>
      <p>Podemos actualizar esta política. Los cambios significativos serán notificados en esta página.</p>

      <div style={styles.contactCard}>
        <h3 style={{ marginTop: 0 }}>7. Contacto</h3>
        <p><strong>Gen.iality</strong></p>
        <p>Cra. 68 # 98 A - 41</p>
        <p>🖥️ Gestión del conocimiento 🤓</p>
        <div style={styles.footerText}>
          <p>📧 contacto@geniality.com.co</p>
          <p>🌐 www.geniality.com.co</p>
          <p>📞 +57 300 216 2757</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticasPrivacidad;