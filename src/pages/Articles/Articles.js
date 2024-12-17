import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faStaffSnake } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import style from "./Articles.module.css";

const Articles = () => {
  return (
    <Nav justify variant="tabs" className={style.allNavTab}>
      <Nav.Item className={style.item}>
        <FontAwesomeIcon icon={faHeartPulse} className={style.icon} />
        <Nav.Link href="/Health" className={style.navLink}>
          الصحّة
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={style.item}>
        <FontAwesomeIcon icon={faBowlFood} className={style.icon} />
        <Nav.Link href="/Food" className={style.navLink}>
          الغذاء
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={style.item}>
        <FontAwesomeIcon icon={faStaffSnake} className={style.icon} />
        <Nav.Link href="/Alternative-medicine" className={style.navLink}>
          الطب البديل
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={style.item}>
        <FontAwesomeIcon icon={faUserNurse} className={style.icon} />
        <Nav.Link href="/Sport" className={style.navLink}>
          الرياضة
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Articles;
