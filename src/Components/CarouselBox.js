import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import forestImg from "../assets/forest1.jpg";
import forestImage from "../assets/forest2.jpg";

const CarouselBox = () => {
  return (
    <Carousel>
      <CarouselItem>
        <img src={forestImg} alt="forest" className="d-block w-100" />
        <Carousel.Caption>
          <h3>A meadow</h3>
          <p>
            with flowers and grass where you can relax and enjoy the beauty of
            nature in general.
          </p>
        </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img src={forestImage} alt="forest" className="d-block w-100" />
        <Carousel.Caption>
          <h3>A forest bridge</h3>
          <p>
            stretching among greenery and filled with the harmony of nature.
          </p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselBox;
