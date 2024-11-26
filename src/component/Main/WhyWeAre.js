import React from "react";
import whyImg1 from "../../assests/whyImg1.png";
import whyImg2 from "../../assests/whyImg2.png";
import whyImg3 from "../../assests/whyImg3.png";
import whyImg4 from "../../assests/whyImg4.png";
import style from "./WhyWeAre.module.css";

const WhyWeAre = () => {
  return (
    <div>
      <p className={style.whyParag}>لماذا نحن؟</p>
      <div className={style.allWhyWeAre}>
        <div className={style.internalDiv}>
          <img
            className={style.imagePart1}
            src={whyImg1}
            alt="why section image"
          />
          <h4>خدمة 24 ساعة على مدار الأسبوع</h4>
          <p>
            لا داعي للانتظار في العيادات، تواصل مع أفضل الأطبّاء وعلى مدار
            الساعة
          </p>
        </div>
        <div className={style.internalDiv}>
          <img
            className={style.imagePart2}
            src={whyImg2}
            alt="why section image"
          />
          <h4>خصوصيّة وأمان</h4>
          <p>
            نحرص على خصوصيّة معلوماتك الصحيّة، ونستخدم أحدث التقنيّات لضمان أمان
            بياناتك
          </p>
        </div>
        <div className={style.internalDiv}>
          <img
            className={style.imagePart3}
            src={whyImg3}
            alt="why section image"
          />
          <h4>أطبّاء معتمدين</h4>
          <p>
            استشارات طبيّة مباشرة مع الأطبّاء من خلال الدردشة الفوريّة
            والمكالمات
          </p>
        </div>
        <div className={style.internalDiv}>
          <img
            className={style.imagePart4}
            src={whyImg4}
            alt="why section image"
          />
          <h4>تكلفة مناسبة</h4>
          <p>خدمات رعاية صحيّة بباقات اشتراك مختلفة تناسب احتياجاتك</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWeAre;
