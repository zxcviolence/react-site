import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { data } from "../features/json";

const CarouselBox = () => {
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <CarouselItem key={item.id}>
            <img src={item.img} alt="img" className="d-block w-100" />
            <Carousel.Caption>
              <h3>{item.info_1}</h3>
              <p>{item.info_2}</p>
            </Carousel.Caption>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default CarouselBox;
