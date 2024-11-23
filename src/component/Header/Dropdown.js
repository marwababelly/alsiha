import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import style from "./Dropdown.module.css";
const Dropdown = () => {
  return (
    <Nav className={style.navDropdown}>
      <NavDropdown
        title="استشر طبيبك"
        className={style.title}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item className={style.rlt} href="#action/3.1">
          واحد
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">اثنين</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ثلاثة</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">أربعة</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="اختبر نفسك"
        className={style.title}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">واحد</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">اثنين</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ثلاثة</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">أربعة</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="مقالات"
        className={style.title}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">واحد</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">اثنين</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ثلاثة</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">أربعة</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Dropdown;
