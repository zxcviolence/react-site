import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { data, blogCategories } from "../JSON/blogData";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col>
          {data.map((item) => {
            return (
              <div key={item.id} className="d-flex m-5">
                <img src={item.img} alt="img" width={150} height={150} />
                <div className="ms-5">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              {blogCategories.map((item) => {
                return (
                  <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>

          <Card className="mt-3" bg="light">
            <Card.Body>
              <Card.Title>Side widget</Card.Title>
              <Card.Text>
                Iste libero, minus consectetur corporis assumenda autem nobis
                enim maiores consequatur placeat consequuntur repellat minima
                atque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
