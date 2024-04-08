import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { powerChange } from "src/store/features/phoneSlice";
import PhoneMenu from "./PhoneMenu";
import LowBattery from "./LowBattery";
import Menu from "./Menu";

const Phone = () => {
  const [chargedChange, setchargedChange] = useState(false);
  const { power, charging } = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId: any;
    setchargedChange(charging);

    if (charging) {
      timeoutId = setTimeout(() => {
        setchargedChange(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [charging]);
  return (
    <div
      id="device"
      className=" z-20 phone-background   h-[550px] w-[280px] rounded-[2.5rem]  max-w-xs relative  isolate text-black border-8 border-black outline outline-blue-200 outline-2 shadow-xl ring-2 ring-black/5 
    before:inset-0
    before:absolute
    before:opacity-50
    before:bg-cover
    before:bg-center
    before:bg-no-repeat
    before:-z-10 
    before:rounded-[2rem]
    
    
 "
    >
      <div className="absolute h-12 w-1  bg-blue-300 -left-3 top-24 rounded-l-md border-r border-white/30"></div>
      <div className="absolute h-12 w-1 bg-blue-300  -left-3 top-40 rounded-l-md border-r border-white/30"></div>
      <div
        onClick={() => {
          dispatch(powerChange());
        }}
        className="absolute cursor-pointer h-16 2xl:h-20 w-1 bg-blue-300  -right-3 top-28 rounded-r-md border-xl border-white/30"
      ></div>

      <header className="grid grid-cols-3 gap-1 items-center text-xs py-2 px-3 relative">
        <div className="flex items-center gap-1">12:37 pm</div>
        <div className="mx-auto relative rounded-full bg-black py-2 w-20 2xl:w-24 px-3 flex items-center">
          <div className="lens bg-[#080928] shadow-inner shadow-indigo-600  ml-auto size-3 rounded-full"></div>
        </div>
        <div className="flex items-center gap-1">12:37 pm</div>
        <div className="w-full flex items-center justify-center absolute top-2">
          <motion.div
            style={{
              height: 28,
              width: "85%",
              background: "black",
              borderRadius: 50,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
              boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: chargedChange ? 1 : 0,
              scale: chargedChange ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <span className="text-white text-[10px]">Charging</span>
            <div className="flex flex-row items-center gap-1">
              <span className="text-white text-[10px]">10%</span>
              <div className="w-6 h-3 bg-green-800 rounded-full">
                <div className="w-1 h-3 bg-green-400 rounded-s-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-4 h-full">
        <div className="relative isolate text-black  transition-all duration-1000 h-full">
          <section id="panel-1" className="w-full h-full duration-1000">
           { charging&&power ? <Menu/>: <LowBattery />}
          </section>
        </div>
      </main>
      <div className="absolute bottom-4 left-2/4 -translate-x-2/4 bg-slate-100 rounded-full mt-1 h-1 w-28 mx-auto"></div>
    </div>
  );
};

export default Phone;
