import React from "react";
import style from "./Footer.module.css";
import facebook from "../../assests/facebook.png";
import linkedIn from "../../assests/LinkedIn.png";
import twitter from "../../assests/Twitter.png";
import youtube from "../../assests/youTube.png";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={style.allFooter}>
      <div className={style.FParagraph}>
        <p>
          جميع المعلومات الطبّية الواردة في موقع الطبي تهدف لزيادة التوعية
          الصحّية، ولا تغني عن استشارة الطبيب المختصّ
        </p>
      </div>
      <div className={style.FAllright}>
        <p>حقوق النشر محفوظة 2008-2024 ©</p>
      </div>
      <div className={style.FIcons}>
        <Nav.Link href="https://www.facebook.com/marwa.babelly.18">
          <img src={facebook} alt="facebookIcon" />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/marwababelly/">
          <img src={linkedIn} alt="linkedIn" />
        </Nav.Link>
        <Nav.Link href="http://www.youtube.com/@marwababelly8333">
          <img src={youtube} alt="Youtube" />
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/marwababelly/">
          {" "}
          <img src={twitter} alt="twitter" />
        </Nav.Link>
      </div>
    </div>
  );
};

export default Footer;
