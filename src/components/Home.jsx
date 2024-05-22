import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles.css';

function Home() {
  return (
    <Container fluid className="mt-5 pt-5">
      <Row>
        <Col md={12} className="text-center">
          <h1>Welcome to Lubren</h1>
          <p>Your reliable partner in refrigeration and air conditioning solutions.</p>
          <Button variant="primary" size="lg">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
