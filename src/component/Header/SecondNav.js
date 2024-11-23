import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assests/logo.png";
import style from "./SecondNav.module.css";
import Dropdown from "./Dropdown";
const SecondNav = () => {
  return (
    <>
      <Navbar className={style.secondNav}>
        <Dropdown />
        <Navbar.Brand href="#home" className={style.brand}>
          <img
            alt="logo icon"
            src={logo}
            width="50"
            height="50"
            className={style.logo}
          />
          الصحّة
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default SecondNav;
