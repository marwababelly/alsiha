import React from "react";
import p1 from "../../assests/p1.jpg";
import p2 from "../../assests/p2.jpg";
import p3 from "../../assests/p3.jpg";
import style from "./Review.module.css";

const Review = () => {
  return (
    <div className={style.allReview}>
      <h3>آراء بعض الناس الموثوقين والمعتمدين</h3>
      <p>
        تجارب وآراء مستخدمي الطبي عن خدمات الرعاية الصحية عن بعد. تعرّف على قصص
        نجاحهم ومدى رضاهم عن تطبيق الطبي نسعى دائماً لتقديم خدمات متميزة تلبي
        احتياجاتكم بكفاءة وفعالية
      </p>
      <div className={style.reviewSection}>
        <div className={style.rev}>
          <p>
            "تواصلت مع طبيب عبر التطبيق وتفاجأت بسرعة الرد والاستجابة،وكان
            الطبيب متعاون جداً"
          </p>
          <div className={style.personSection}>
            <img src={p1} alt="p1" />
            <h4>د. بانة حاجولي</h4>
          </div>
        </div>
        <div className={style.rev}>
          <p>
            "الطبي غيّر حياتي تماماً! لم أعد بحاجة إلى الانتظار في العيادات.
            بإمكاني التواصل مع الطبيب من أي وقت وفي أي مكان."
          </p>
          <div className={style.personSection}>
            <img src={p2} alt="p2" />
            <h4>د. رفيدة غانمي</h4>
          </div>
        </div>
        <div className={style.rev}>
          <p>
            "شكراً على الخدمات الرائعة! الطبي جعل تجربة العلاج أسهل مع توصيات
            الطبيب والإجابات الدقيقة وعالية الجودة."
          </p>
          <div className={style.personSection}>
            <img src={p3} alt="p3" />
            <h4>د. وحيد منير</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
