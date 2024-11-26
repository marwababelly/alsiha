import React from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Overview from "../Main/Overview";
import WhyWeAre from "../Main/WhyWeAre";
import Number from "../Main/Number";

const MainNav = () => {
  return (
    <div>
      <FirstNav />
      <SecondNav />
      <Overview />
      <WhyWeAre />
      <Number />
    </div>
  );
};

export default MainNav;
