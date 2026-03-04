import React, { useState } from "react";
import Footers from "../Shared/Footers/Footers";
import NavBar from "../Shared/Headers/NavBar";
import Support from "../components/Support/Support";
import { toast } from "react-toastify";

const serviceData = fetch("customerServices.json").then((res) => res.json());

const Layouts = () => {
  const [customSup, setCustomSup] = useState([]);
  const [resolve, setResolve] = useState([]);
  const removedTask = (taskSup) => {
    toast("Tasks Status Completed!");
    setResolve([...resolve, taskSup]);
    const filterData = customSup.filter((cus) => cus.id !== taskSup.id);
    setCustomSup(filterData);
  };

  return (
    <div className="bg-[#F5F5F5] space-y-5">
      <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 space-y-5">
        <div>
          <NavBar resolve={resolve} customSup={customSup} />
        </div>
        <div>
          <Support
            resolve={resolve}
            removedTask={removedTask}
            customSup={customSup}
            setCustomSup={setCustomSup}
            serviceData={serviceData}
          />
        </div>
      </div>
      <div>
        <Footers />
      </div>
    </div>
  );
};

export default Layouts;
