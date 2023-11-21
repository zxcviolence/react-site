import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container style={{ width: "500px" }}>
      <h1 className="text-center">Contact Us</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text>We'll never share your email with anyone else</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check className="mt-2 mb-2" type="checkbox" label="Check me out" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contacts;
