import React from "react";
import { useParams } from "react-router-dom";
import FirstNav from "../../component/Header/FirstNav";
import SecondNav from "../../component/Header/SecondNav";
import style from "./styleDetailsArticles.module.css";
import sport_img1 from "../../assests/sport-img1.jpg";
import sport_img2 from "../../assests/sport-img2.jpg";

const SportArticles = () => {
  const sportArticleDetails = [
    {
      id: 1,
      name: "أضرار ومخاطر إبر التنحيف",
      owner: "الصيدلانيّة غيداء مقدام",
      lastUpdate: "آخر تحديث في: 22_4_2024",
      image: sport_img1,
      par: "منذ أن شاع استخدام إبر التنحيف لإنقاص الوزن ازدادت التساؤلات حول أضرارها ومخاطرها، والتي قد تتراوح بين أعراضٍ هضمية بسيطة، مثل: الغثيان، ومشكلاتٍ أكثر خطورة، مثل: التهاب البنكرياس، لذا يجب أن يكون المريض على دراية بالآثار الجانبية لهذه الإبر قبل تجربتها للتنحيف.",
    },
    {
      id: 2,
      name: "تعرّف على طرق علاج التواء الكاحل",
      owner: "الدكتورة ريما أسعد",
      lastUpdate: "آخر تحديث في: 10_2_2024",
      image: sport_img2,
      par: "يُعد التواء الكاحل من الإصابات الشائعة، خاصةً لدى الرياضيين، ويحدث عند تمزق الأربطة أو تمددها بصورة أكبر من اللازم، ومع أنّ التواء الكاحل يكون بسيطًا في العادة، إلا أنّ بعض الحالات تكون شديدة وتستدعي مراجعة الطبيب",
    },
  ];
  const { sportLink } = useParams();

  const selectedArticle = sportArticleDetails.find(
    (article) => article.id === Number(sportLink)
  );

  if (!selectedArticle) return <p>Sport details Article not found!</p>;

  const { name, owner, lastUpdate, image, par } = selectedArticle;
  return (
    <div>
      <FirstNav />
      <SecondNav />
      <div className={style.allDetails}>
        <h1 className={style.h1Details}>{name}</h1>
        <div className={style.parDetails}>
          <p>{owner}</p>
          <p>{lastUpdate}</p>
        </div>
        <img
          src={image}
          alt="articles details"
          className={style.imageDetails}
        />
        <p className={style.allParDetails}>{par}</p>
      </div>
    </div>
  );
};

export default SportArticles;
