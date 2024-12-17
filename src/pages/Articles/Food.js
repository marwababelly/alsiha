import React from "react";
import Articles from "./Articles";
import { Card, NavLink } from "react-bootstrap";
import style from "./styleArticles.module.css";
import food_img1 from "../../assests/food-img1.jpg";
import food_img2 from "../../assests/food-img2.jpg";

const Food = () => {
  const food_articles = [
    {
      cardId: 1,
      cardImg: food_img1,
      cardTitle: "تحضير طعام الطفل للمدرسة",
      cardText:
        "احرصي على تحضير طعام طفلك الذي سيأخذه للمدرسة بعناية على أن يحتوي على كافّة المجموعات الغذائيّة, وحاولي إرشاده لتجنّب شراء ...",
      cardUpdate: "آحر تحديث منذ أسبوعين مضى",
    },
    {
      cardId: 2,
      cardImg: food_img2,
      cardTitle: "تعرّف على طرق علاج التواء الكاحل",
      cardText:
        "يُعتقد أنّ بذور البابايا  تُقدم العديد من الفوائد من الجسم؛ لاحتوائها على مضادات الأكسدة ومركباتٍ أخرى تُخفف الالتهاب ",
      cardUpdate: "آخر تحديث منذ شهر مضى",
    },
  ];
  return (
    <div>
      <Articles />
      {food_articles.map((h) => (
        <NavLink href={`/Food/${h.cardId}`}>
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

export default Food;
