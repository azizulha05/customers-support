import React from "react";
import Footers from "../Shared/Footers/Footers";
import NavBar from "../Shared/Headers/NavBar";
import Support from "../components/Support/Support";

const serviceData = fetch("customerServices.json").then((res) => res.json());

const Layouts = () => {
  return (
    <div className="bg-[#F5F5F5] space-y-5">
      <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 space-y-5">
        <div>
          <NavBar />
        </div>
        <div>
          <Support serviceData={serviceData} />
        </div>
      </div>
      <div>
        <Footers />
      </div>
    </div>
  );
};

export default Layouts;
