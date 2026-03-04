import React, { use } from "react";
import Customers from "../Customers/Customers";
import Tasks from "../Tasks/Tasks";

const Support = ({ serviceData, customSup, setCustomSup, removedTask, resolve }) => {
  const services = use(serviceData);
  return (
    <div className="flex flex-wrap-reverse justify-between gap-5">
      <div className="flex-1">
        <Customers customSup={customSup} setCustomSup={setCustomSup} services={services} />
      </div>
      <div className="w-full md:w-68">
        <Tasks resolve={resolve} removedTask={removedTask} customSup={customSup} />
      </div>
    </div>
  );
};

export default Support;
