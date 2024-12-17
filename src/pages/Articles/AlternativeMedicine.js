import React from "react";
import Articles from "./Articles";
import { Card, NavLink } from "react-bootstrap";
import style from "./styleArticles.module.css";
import alternative_img1 from "../../assests/alternative-img1.jpg";
import alternative_img2 from "../../assests/alternative_img2.jpg";

const AlternativeMedicine = () => {
  const alternative_medicine_articles = [
    {
      cardId: 1,
      cardImg: alternative_img1,
      cardTitle: "هل يعالج عسل المانكو التهابات الرئة؟",
      cardText:
        "ستخدم الناس لقرون عديدة عسل النحل لعلاج الالتهابات وكمضاد حيوي، وتوصل العلم لهذا الاستخدام الآن فقط، حيث أثبتت دراسة جديدة أن عسل المانوكا يمكن أن يعالج...",
      cardUpdate: "آحر تحديث منذ شهر مضى",
    },
    {
      cardId: 2,
      cardImg: alternative_img2,
      cardTitle: "التداوي بالأعشاب",
      cardText:
        "يُعتبر التّداوي بالأعشابِ من أقدمِ أنواعِ الطّبِ البديلِ، فيتمُ استخدامُ نوعِ من الأعشابِ في علاجِ مرضٍ ما، ومن هذه الأعشابِ والأمراض...",
      cardUpdate: "آخر تحديث منذ 6 أشهر مضت",
    },
  ];
  return (
    <div>
      <Articles />
      {alternative_medicine_articles.map((h) => (
        <NavLink href={`/Alternative-medicine/${h.cardId}`}>
          <Card className={style.allCard}>
            <Card.Img
              src={h.cardImg}
              alt="Card image"
              className={style.imgCard}
            />
            <Card.ImgOverlay className={style.paragraphCard}>
              <Card.Title className={style.titleCard}>{h.cardTitle}</Card.Title>
              <Card.Text>{h.cardText}</Card.Text>
              <Card.Text className={style.textCard}>{h.cardUpdate}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </NavLink>
      ))}{" "}
    </div>
  );
};

export default AlternativeMedicine;
