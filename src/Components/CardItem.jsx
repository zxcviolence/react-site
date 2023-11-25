import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { data } from "../JSON/teamData";

const CardItem = () => {
  return (
    <Container>
      <h2 className="text-center m-4">Our team</h2>
      <CardGroup className="m-4">
        {data.map((item) => {
          return (
            <Card key={item.id} className="p-1 m-4" bg="warning">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Button variant="primary">{item.buttonText}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </Container>
  );
};

export default CardItem;
