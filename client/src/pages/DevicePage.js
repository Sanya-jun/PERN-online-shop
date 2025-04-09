import React, { useEffect, useState } from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import Swal from "sweetalert2";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSlider from "../components/ImageSlayder";

SwiperCore.use([Navigation, Pagination]);

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const addBasket = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Товар успешно добавлен в корзину!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <ImageSlider />
          {/* <ImageZoom 
            // width={600}
            // height={600}
            src={process.env.REACT_APP_API_URL + device.img}
          /> */}
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "caver",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant="outline-dark" onClick={addBasket}>
              {" "}
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
