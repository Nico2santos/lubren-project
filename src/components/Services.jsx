import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles.css'; // Importación del archivo de estilos

function Services() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={6}>
          <h2>Our Services</h2>
          <ul>
            <li>Installation of commercial refrigeration systems</li>
            <li>Maintenance and repair of air conditioning units</li>
            <li>Energy-efficient solutions for industrial cooling</li>
            <li>24/7 emergency service</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src="https://picsum.photos/600/400" alt="Our Services" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Services;