import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Design</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="second">Team</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="third">Programming</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first">
                <img
                  className="img-fluid"
                  width={760}
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Design"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, expedita!
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <img
                  className="img-fluid"
                  width={760}
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, expedita!
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <img
                  className="img-fluid"
                  width={760}
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Programming"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, expedita!
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="fourth">
                <img
                  className="img-fluid"
                  width={760}
                  src="https://raygun.com/blog/images/popular-javascript-frameworks/feature.png"
                  alt="Frameworks"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, expedita!
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="fifth">
                <img
                  className="img-fluid"
                  width={760}
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201116211344/Top-10-Natural-Language-Programming-Libraries.jpg"
                  alt="Libraries"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, expedita!
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;
