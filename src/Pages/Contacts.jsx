import axios from "axios";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Contacts = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_2ojdj7e";
    const templateId = "template_0ypvoio";
    const publicKey = "hJRg1RV0CLkH3jmxs";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Dex",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (res.data === "OK") {
        Swal.fire({
          title: "Thanks!",
          text: "Your email has been sent",
          icon: "success",
        });
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error.message}`,
      });
    }
  };

  return (
    <Container style={{ width: "500px" }}>
      <h1 className="text-center">Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            as="input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text>We'll never share your email with anyone else</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contacts;
