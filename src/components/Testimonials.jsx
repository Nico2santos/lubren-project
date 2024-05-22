import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonials() {
  return (
    <Container className="mt-5 pt-5">
      <h2>Testimonials</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>"Lubren provided excellent service for our new office building. Highly recommended!"</Card.Text>
              <Card.Footer>- John Doe, CEO of Company A</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>"Their team was professional and efficient. Our refrigeration systems are running smoothly."</Card.Text>
              <Card.Footer>- Jane Smith, Manager at Company B</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>"Great customer service and reliable solutions. We trust Lubren for all our cooling needs."</Card.Text>
              <Card.Footer>- Mark Wilson, Director at Company C</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
