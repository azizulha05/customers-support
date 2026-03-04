import React from "react";
import Task from "./Task";
import Resolved from "./Resolved";

const Tasks = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h2 className="text-[#34485A] font-semibold text-xl">Tasks Status</h2>
        <p className="text-[#627382]">Select a ticket to add to Task Status</p>
        <div className="">
          <Task />
        </div>
      </div>
      <div>
        <h2 className="text-[#34485A] font-semibold text-xl">Resolved Task</h2>
        <p className="text-[#627382]">No resolved tasks yet.</p>
        <div>
          <Resolved />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
