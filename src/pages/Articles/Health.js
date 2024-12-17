import React from "react";
import Articles from "./Articles";
import { Card, NavLink } from "react-bootstrap";
import healthy_img1 from "../../assests/healthy-img1.jpg";
import healthy_img2 from "../../assests/healthy_img2.jpg";
import style from "./styleArticles.module.css";

const Health = () => {
  const healthy_articles = [
    {
      cardId: 1,
      cardImg: healthy_img1,
      cardTitle: "أضرار ومخاطر إبر التنحيف ونصائح قبل استخدامها",
      cardText:
        "منذ أن شاع استخدام إبر التنحيف لإنقاص الوزن ازدادت التساؤلات حول أضرارها ومخاطرها، والتي قد تتراوح بين أعراضٍ هضمية بسيطة...",
      cardUpdate: "آحر تحديث منذ 3 أسابيع مضت",
    },
    {
      cardId: 2,
      cardImg: healthy_img2,
      cardTitle: "تعرّف على طرق علاج التواء الكاحل",
      cardText:
        "عادة يُعد التواء الكاحل من الإصابات الشائعة، خاصةً لدى الرياضيين، ويحدث عند تمزق الأربطة أو تمددها بصورة أكبر من اللازم، ومع أنّ التواء الكاحل يكون بسيطًا ...",
      cardUpdate: "آخر تحديث منذ أسبوع مضى",
    },
  ];

  return (
    <div>
      <Articles />
      {healthy_articles.map((h) => (
        <NavLink href={`/Health/${h.cardId}`}>
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
      ))}
    </div>
  );
};

export default Health;
