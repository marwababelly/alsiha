import React from "react";
import style from "./Overview.module.css";
import whyImg1 from "../../assests/whyImg1.png";
import whyImg2 from "../../assests/whyImg2.png";
import whyImg3 from "../../assests/whyImg3.png";
import whyImg4 from "../../assests/whyImg4.png";

const WhyWeAre = () => {
  return (
    <div className={style.allWhyWeAre}>
      <div className={style.internalDiv}>
        <div className={style.imgWhyWeAre}>
          <img src={whyImg1} alt="why section image" />
        </div>
        <h4>خدمة 24 ساعة على مدار الأسبوع</h4>
        <p>
          لا داعي للانتظار في العيادات، تواصل مع أفضل الأطبّاء وعلى مدار الساعة
        </p>
      </div>
      <div className={style.internalDiv}>
        <img src={whyImg2} alt="why section image" />
        <h4>خصوصيّة وأمان</h4>
        <p>
          نحرص على خصوصيّة معلوماتك الصحيّة، ونستخدم أحدث التقنيّات لضمان أمان
          بياناتك
        </p>
      </div>
      <div className={style.internalDiv}>
        <img src={whyImg3} alt="why section image" />
        <h3>أطبّاء معتمدين</h3>
        <p>
          استشارات طبيّة مباشرة مع الأطبّاء من خلال الدردشة الفوريّة والمكالمات
        </p>
      </div>
      <div className={style.internalDiv}>
        <img src={whyImg4} alt="why section image" />
        <h3>تكلفة مناسبة</h3>
        <p>خدمات رعاية صحيّة بباقات اشتراك مختلفة تناسب احتياجاتك</p>
      </div>
    </div>
  );
};

export default WhyWeAre;
