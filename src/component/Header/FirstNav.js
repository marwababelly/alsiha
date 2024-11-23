import React from "react";
import style from "./FirstNav.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const FirstNav = () => {
  return (
    <Navbar id="responsive-navbar-nav" className={style.firstNav}>
      <Navbar.Text className={style.firstN}>
        !طبيبك معك أينما كنت ... تحدّث مع طبيب الآن
      </Navbar.Text>
      <Nav className={style.secondN}>
        <FontAwesomeIcon
          className={style.fontIcon}
          icon={faUserPlus}
          // icon="fa-light fa-user-plus"
        />
        <Nav.Link href="/signUp" className={style.signUpL}>
          تسجيل الدخول
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default FirstNav;
