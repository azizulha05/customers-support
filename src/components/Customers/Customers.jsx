import React from "react";
import Customer from "./Customer";

const Customers = ({ services, customSup, setCustomSup }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-[#34485A] font-semibold text-xl">Customers Tickets</h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 space-y-5">
        {services.map((service) => (
          <Customer
            customSup={customSup}
            setCustomSup={setCustomSup}
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
