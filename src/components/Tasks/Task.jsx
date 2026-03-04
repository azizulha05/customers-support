import React from "react";

const Task = ({ custom, removedTask }) => {
  const handleRemove = () => {
    removedTask(custom);
  };
  return (
    <div className="space-y-4">
      <div className="bg-white p-2 rounded space-y-2">
        <h2 className="text-[#34485A] font-semibold text-sm">{custom.title}</h2>
        <button onClick={handleRemove} className="bg-[#02A53B] w-full rounded py-1 text-white">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Task;
