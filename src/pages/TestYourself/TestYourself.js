import React from "react";
import { NavLink } from "react-bootstrap";
import pregnancyTest from "../../assests/pregnancyTest.png";
import ovulationTest from "../../assests/ovulationTest.png";
import BMITest from "../../assests/BMITest.png";
import calorieTest from "../../assests/calorieTest.png";
import waterTest from "../../assests/waterTest.png";
import cleverCalorieTest from "../../assests/cleverCalorieTest.png";
import style from "./TestYourself.module.css";
import FirstNav from "../../component/Header/FirstNav";
import SecondNav from "../../component/Header/SecondNav";

const TestYourself = () => {
  const testPage = [
    {
      id: 1,
      img: pregnancyTest,
      title: "اختبار الحمل والولادة",
      par: "طريقة حساب الحمل باستخدام حاسبة الحمل لحساب الحمل والولادة.",
      link: "anotherTestPage",
    },
    {
      id: 2,
      img: ovulationTest,
      title: "اختبار التبويض",
      par: "ادخلي تاريخ آخر دورة لحساب التبويض ومعرفة أيام الخصوبة وفرص الحمل. ",
      link: "anotherTestPage",
    },
    {
      id: 3,
      img: BMITest,
      title: "اختبار مؤشّر كتلة الجسم _BMI",
      par: "وزن الشخص بالكيلوغرام مقسوماً على مربّع طوله بالمتر، ويستعمل كمقياس لتحديد ارتفاع دهون الجسم.",
      link: "anotherTestPage",
    },
    {
      id: 4,
      img: calorieTest,
      title: "اختبار السعرات الحراريّة",
      par: "تحكّم في نظامك الغذائي باستخدام حاسبة السعرات الحراريّة.",
      link: "anotherTestPage",
    },
    {
      id: 5,
      img: waterTest,
      title: "حساب كميّة الماء التي يحتاجها الجسم",
      par: "إن الماء شريان الحياة وأساسها، فهو مهم لكل خليّة ونسيج في الجسم للقيام بالوظائف الحيويّة.",
      link: "waterTestPage",
    },
    {
      id: 6,
      img: cleverCalorieTest,
      title: "اختبار سعراتك الذكيّة ",
      par: "التقط صورة سريعة لوجبتك واكتشف محتوياتهامن السعرات الحراريّة بسهولة",
      link: "anotherTestPage",
    },
  ];
  return (
    <>
      <FirstNav />
      <SecondNav />
      <div className={style.allTestPage}>
        <p className={style.allParTest}>أهم الاختبارات:</p>
        <div className={style.allCards}>
          {testPage.map((t) => (
            <div className={style.cardTest}>
              <img
                className={style.imageTest}
                src={t.img}
                alt={`test image${t.id}`}
              />
              <h4 className={style.h4Test}>{t.title}</h4>
              <p className={style.parTest}>{t.par}</p>
              <NavLink href={`/TestYourself/${t.link}`}>
                <button className={style.buttonTest}>احسب الآن</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestYourself;
