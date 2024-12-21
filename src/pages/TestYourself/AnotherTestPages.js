import React from "react";
import style from "./AnotherTestPages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const AnotherTestPages = () => {
  return (
    <div className={style.allAnotherDiv}>
      <FontAwesomeIcon className={style.bombIcon} icon={faBomb} />
      <p>قيد العمل على هذا الختبار سوف يكون جاهز في وقت قريب!</p>
    </div>
  );
};

export default AnotherTestPages;
