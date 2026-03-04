import React from "react";

const Resolved = ({ res }) => {
  return (
    <div className="bg-[#E0E7FF] p-2 rounded">
      <p className="text-[#001931]">{res.title}</p>
    </div>
  );
};

export default Resolved;
