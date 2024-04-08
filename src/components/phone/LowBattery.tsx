import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const LowBattery = () => {

  const {charging} = useSelector((state:RootState)=>state.phone)

  return (
    <div className="flex  flex-col justify-center h-full w-full  items-center">
      <div className="w-4 h-2 bg-white"></div>
      <div className=" h-24 w-12 border-4 border-white flex items-end ">
        <div className={`w-full h-2 ${charging ? 'bg-green-400':'bg-red-600'} animate-pulse`}></div>
      </div>
    </div>
  );
};

export default LowBattery;
