import React from "react";
import style from "./Number.module.css";
import num1 from "../../assests/num1.png";
import num2 from "../../assests/num2.png";
import num3 from "../../assests/num3.png";
import num4 from "../../assests/num4.png";

const Number = () => {
  return (
    <div className={style.allNum}>
      <h3>نحن في أرقام</h3>
      <p>
        أبرز الإنجازات والأرقام التي تعكس جهودنا المستمرة في تقديم خدمات رعاية
        صحية متميزة وموثوقة
      </p>
      <div className={style.nums}>
        <div>
          <img src={num1} alt="num image1" />
          <h4>+3M</h4>
          <h6>تحميل للتطبيق</h6>
        </div>
        <div>
          {" "}
          <img src={num2} alt="num image2" />
          <h4>+2M</h4>
          <h6>استشارة طبيّة</h6>
        </div>
        <div>
          {" "}
          <img src={num3} alt="num image3" />
          <h4>+1.5M</h4>
          <h6>توصية طبيّة</h6>
        </div>
        <div>
          {" "}
          <img src={num4} alt="num image4" />
          <h4>+192M</h4>
          <h6>مستخدم سنويّاً</h6>
        </div>
      </div>
    </div>
  );
};

export default Number;
