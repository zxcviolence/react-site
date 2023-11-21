import React from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex m-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="js"
              width={150}
              height={150}
            />
            <div className="ms-5">
              <h5>Blog post</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                totam nemo beatae repellat libero quasi impedit minima eligendi
                architecto accusantium expedita explicabo harum eaque incidunt
                asperiores at nihil perferendis atque illo delectus, veniam
                officiis est. Iste libero, minus consectetur corporis assumenda
                autem nobis enim maiores consequatur placeat consequuntur
                repellat minima atque.
              </p>
            </div>
          </div>

          <div className="d-flex m-5">
            <img
              src="https://titrias.com/files/2022/04/typescript.png"
              alt="js"
              width={150}
              height={150}
            />
            <div className="ms-5">
              <h5>Blog post</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                totam nemo beatae repellat libero quasi impedit minima eligendi
                architecto accusantium expedita explicabo harum eaque incidunt
                asperiores at nihil perferendis atque illo delectus, veniam
                officiis est. Iste libero, minus consectetur corporis assumenda
                autem nobis enim maiores consequatur placeat consequuntur
                repellat minima atque.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML/CSS</ListGroup.Item>
              <ListGroup.Item>Javascript</ListGroup.Item>
              <ListGroup.Item>Pyton</ListGroup.Item>
              <ListGroup.Item>Java</ListGroup.Item>
              <ListGroup.Item>C++</ListGroup.Item>
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
