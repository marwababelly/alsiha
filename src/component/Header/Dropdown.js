import React from "react";
import { Nav } from "react-bootstrap";
import style from "./Dropdown.module.css";
const Dropdown = () => {
  return (
    <Nav className={style.navDropdown}>
      <Nav.Link href="/Articles" className={style.title}>
        مقالات
      </Nav.Link>
      <Nav.Link href="/ConsultADoctor" className={style.title}>
        استشر طبيبك
      </Nav.Link>
      <Nav.Link href="/TestYourself" className={style.title}>
        اختبر نفسك
      </Nav.Link>
    </Nav>
  );
};

export default Dropdown;
