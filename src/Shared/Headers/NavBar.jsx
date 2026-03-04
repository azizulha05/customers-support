import React from "react";
import Headers from "./Headers";
import Banner from "./Banner";

const NavBar = ({ customSup, resolve }) => {
  return (
    <div>
      <Headers />
      <Banner resolve={resolve} customSup={customSup} />
    </div>
  );
};

export default NavBar;
