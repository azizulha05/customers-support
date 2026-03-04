import React from "react";
import Task from "./Task";
import Resolved from "./Resolved";

const Tasks = ({ customSup, removedTask, resolve }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-[#34485A] font-semibold text-xl border-b-2">Tasks Status</h2>
        {customSup.length === 0 ? (
          <p className="text-[#627382]">Select a ticket to add to Task Status</p>
        ) : (
          <div className="space-y-4">
            {customSup.map((custom) => (
              <Task key={custom.id} custom={custom} removedTask={removedTask} />
            ))}
          </div>
        )}
      </div>
      <div className="space-y-4">
        <h2 className="text-[#34485A] font-semibold text-xl border-b-2">Resolved Task</h2>
        {resolve.length === 0 ? (
          <p className="text-[#627382]">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-4">
            {resolve.map((res) => (
              <Resolved key={res.id} res={res} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
