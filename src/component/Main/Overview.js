import React from "react";
import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import style from "./Overview.module.css";
import image1 from "../../assests/image2.jpg";
import image2 from "../../assests/image3.jpg";
import image3 from "../../assests/image1.jpg";

const Overview = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      className={style.overview}
    >
      <Carousel.Item className={style.item}>
        <Container className={style.imgContainer}>
          <img src={image1} className={style.imageOverview} />
        </Container>
        <Carousel.Caption className={style.caption}>
          <h3 className={style.h3Overview}>نظامك الصّحي هو أساس حياتك</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={style.item}>
        <Container className={style.imgContainer}>
          <img src={image2} className={style.imageOverview} />
        </Container>{" "}
        <Carousel.Caption className={style.caption}>
          <h3 className={style.h3Overview}>استشارات طبيّة سريعة بكبسة زر</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={style.item}>
        <Container className={style.imgContainer}>
          <img src={image3} className={style.imageOverview} />
        </Container>{" "}
        <Carousel.Caption className={style.caption}>
          <h3 className={style.h3Overview}>اختبر لياقتك وتعلّم عن نفسك</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Overview;
