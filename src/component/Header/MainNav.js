import React from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Overview from "../Main/Overview";
import WhyWeAre from "../Main/WhyWeAre";
import Number from "../Main/Number";
import Review from "../Main/Review";

const MainNav = () => {
  return (
    <div>
      <FirstNav />
      <SecondNav />
      <Overview />
      <WhyWeAre />
      <Number />
      <Review />
    </div>
  );
};

export default MainNav;
