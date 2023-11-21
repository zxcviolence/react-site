import React from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <CardGroup className="m-4">

          <Card className="p-1 m-4" bg="warning">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores earum iusto obcaecati quasi ad fugiat! Corrupti.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>

          <Card className="p-1 m-4" bg="warning">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>SEO</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores earum iusto obcaecati quasi ad fugiat! Corrupti.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>

          <Card className="p-1 m-4" bg="warning">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Design</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores earum iusto obcaecati quasi ad fugiat! Corrupti.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>

        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
