import React from "react";

const Banner = ({ customSup, resolve }) => {
  return (
    <div className="flex justify-between items-center text-center gap-4 lg:my-10">
      <div className="w-full h-32 bg-linear-to-br from-[#632EE3CC] to-[#9F62F2E0] flex flex-col justify-center items-center text-white rounded">
        <h2 className="font-medium text-2xl">In-Progress</h2>
        <p className="text-xl font-medium ">{customSup.length}</p>
      </div>
      <div className="w-full h-32 bg-linear-to-br from-[#54CF68F5] to-[#00827AEB] flex flex-col justify-center items-center text-white rounded">
        <h2 className="font-medium text-2xl">Resolved</h2>
        <p className="text-xl font-medium ">{resolve.length}</p>
      </div>
    </div>
  );
};

export default Banner;
