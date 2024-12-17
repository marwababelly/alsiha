import React from "react";
import Articles from "./Articles";
import { Card, NavLink } from "react-bootstrap";
import style from "./styleArticles.module.css";
import sport_img1 from "../../assests/sport-img1.jpg";
import sport_img2 from "../../assests/sport-img2.jpg";

const Sport = () => {
  const sport_articles = [
    {
      cardId: 1,
      cardImg: sport_img1,
      cardTitle: "المشي 10 آلاف خطوة يومياً يخفف خطر الإصابة بالخرف",
      cardText:
        "يؤثر الخرف على أكثر من 55 مليون شخص حول العالم ويُعد العامل السابع للوفاة حول العالم، كما بينت مراكز السيطرة على الأمراض والوقاية منها أنّ مرض الزهايمر...",
      cardUpdate: "آحر تحديث منذ شهر مضى",
    },
    {
      cardId: 2,
      cardImg: sport_img2,
      cardTitle:
        "دقيقتان من التمرين يوميّاً تقللان من خطر الموت المبكّر وأمراض القلب",
      cardText:
        "ممارسة التمارين الرياضية الشديدة لمدة دقيقتين يومياً؛ أي ما يقارب 15 دقيقة في الأسبوع تقلل من خطر الإصابة بأمراض القلب، والسرطان، والوفاة...",
      cardUpdate: "آخر تحديث منذ 6 أشهر مضت",
    },
  ];
  return (
    <div>
      <Articles />
      {sport_articles.map((h) => (
        <NavLink href={`/Sport/${h.cardId}`}>
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

export default Sport;
