import React, { use } from "react";
import Customers from "../Customers/Customers";
import Tasks from "../Tasks/Tasks";

const Support = ({ serviceData }) => {
  const services = use(serviceData);
  return (
    <div className="flex flex-wrap justify-between gap-5">
      <div className="flex-1">
        <Customers services={services} />
      </div>
      <div className="w-full md:w-68">
        <Tasks />
      </div>
    </div>
  );
};

export default Support;
