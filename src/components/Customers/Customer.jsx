import React from "react";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

const Customer = () => {
  return (
    <div className="space-y-3">
      <div className="bg-white p-3 rounded  space-y-3">
        <div className="flex justify-between items-center text-center ">
          <h2 className="text-[#001931] font-medium text-sm lg:text-xl">
            Login Issues - Can't Access Account
          </h2>
          <p className="flex items-center bg-[#B9F8CF] text-[#02A53B] px-3 py-1 rounded-2xl">
            <GoDotFill className="text-[#0B5E06] h-7 w-7" />
            Open
          </p>
        </div>
        <h2 className="text-[#627382] text-sx">
          Customer is unable to log in to their account. They've tried resetting their password
          multiple times but still...
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <p className="text-[#627382] text-xs font-normal">#1001</p>
            <p className="text-[#F83044] text-ms font-medium">HIGH PRIORITY</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-[#627382] text-xs font-normal">John Smith</p>
            <p className="text-[#627382] text-xs font-normal flex items-center gap-1">
              <SlCalender />
              1/16/2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
