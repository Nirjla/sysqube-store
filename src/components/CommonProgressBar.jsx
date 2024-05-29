import React, { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

const CommonProgressBar = () => {
  const { progress } = useContext(ProgressContext);

  return (
    
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-primary h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default CommonProgressBar;
