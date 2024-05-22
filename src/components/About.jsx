import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles.css'; // Cambio en la importación

function About() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col>
          <h2>About Us</h2>
          <p>Lubren is dedicated to providing top-notch refrigeration and air conditioning services. With over 20 years of experience, we are committed to excellence and customer satisfaction.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
