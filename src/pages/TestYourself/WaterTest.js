import React, { useState } from "react";
import waterPage from "../../assests/waterPage.jpg";
import style from "./WaterTest.module.css";

const WaterTest = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
  };
  return (
    <div className={style.allWaterPageTest}>
      <div className={style.div1WaterTestImage}>
        <img
          className={style.waterTestImage}
          src={waterPage}
          alt="water page details"
        />
      </div>
      <div className={style.div2WaterTestImage}>
        <h2>حاسبة كميّة الماء التي يحتاجها الجسم يوميّاً</h2>
        <p>ما هو وزنك؟(كغ)</p>
        <input
          type="range"
          id="rangeInput"
          min={30}
          max={130}
          value={value}
          onChange={handleChange}
        />
        <p>وزنك الحالي: {value}</p>
        <h4>اختر مستوى نشاطك اليومي:</h4>
        <input type="radio" id="r1" name="fav_language" value="r1" />
        <label for="r1">غير نشيط</label>
        <br />
         <input type="radio" id="r2" name="fav_language" value="r2" /> 
        <label for="r2">قليل النشاط</label>
        <br />
        <input type="radio" id="r3" name="fav_language" value="r3" /> {" "}
        <label for="r3">متوسط النشاط</label>
        <br />
        <input type="radio" id="r4" name="fav_language" value="r4" /> {" "}
        <label for="r4"> نشيط</label>
        <br />
        <input type="radio" id="r5" name="fav_language" value="r5" /> {" "}
        <label for="r5">نشيط جدّاً</label>
        <br />
        <input className={style.submitButton} type="submit" value="إرسال" />
      </div>
    </div>
  );
};

export default WaterTest;
