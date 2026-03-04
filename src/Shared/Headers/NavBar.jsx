import React from "react";
import Headers from "./Headers";
import Banner from "./Banner";

const NavBar = ({ customSup }) => {
  return (
    <div>
      <Headers />
      <Banner customSup={customSup} />
    </div>
  );
};

export default NavBar;
