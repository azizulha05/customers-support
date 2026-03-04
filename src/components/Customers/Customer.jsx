import React from "react";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";

const Customer = ({ service, customSup, setCustomSup }) => {
  const { createdAt, status, priority, customer, description, title, id } = service;

  const handelSup = (ser) => {
    toast("Check this problem!");
    setCustomSup([...customSup, ser]);
  };
  return (
    <div className="space-y-3">
      <div onClick={() => handelSup(service)} className="bg-white p-3 rounded  space-y-3">
        <div className="flex justify-between items-center text-center ">
          <h2 className="text-[#001931] font-medium text-sm lg:text-xl">{title}</h2>
          <p
            className={`flex items-center ${status == "Open" || status == "Resolved" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#9C7700]"}   px-3 py-1 rounded-2xl`}
          >
            <GoDotFill
              className={` ${status == "Open" || status == "Resolved" ? "text-[#0B5E06]" : "text-[#FEBB0C]"} h-7 w-7`}
            />
            {status}
          </p>
        </div>
        <h2 className="text-[#627382] text-sx">{description}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <p className="text-[#627382] text-xs font-normal">{id}</p>
            <p className="text-[#F83044] text-ms font-medium">{priority}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-[#627382] text-xs font-normal">{customer}</p>
            <p className="text-[#627382] text-xs font-normal flex items-center gap-1">
              <SlCalender />
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
