import React, { useState } from "react";
import { motion } from "framer-motion";
import Phone from "./phone/Phone";
import PhoneBehind from "./phone/PhoneBehind";
import MainScreen from "./screen/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { changeCharging, powerChange } from "src/store/features/phoneSlice";
import CloseScreen from "./screen/CloseScreen";
import BottomPlatform from "./HomePage/BottomPlatform";
import MainBackground from "./screen/MainBackground";

const Homepage = () => {
  const [isFlip, setIsFlip] = useState(true);

  const { charging, power } = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="w-full h-full bg-slate-900  overflow-hidden">
        <MainBackground/>
        <div className="grid grid-cols-4 ">
          <div className="relative   h-screen flex items-center justify-center">
            <div className=" flex gap-4 flex-col items-center">
              <div className=" z-[99999]">
                {isFlip ? <Phone /> : <PhoneBehind />}
              </div>

              <motion.div
                onClick={() => {
                  if (power) {
                    dispatch(powerChange());
                  }
                  dispatch(changeCharging());
                }}
                initial={{ y: 0 }}
                animate={{ y: charging ? -20 : 50 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 30,
                }}
              >
                <div className="cable">
                  <span className="head"></span>
                  <span className="body"></span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-span-3 relative ">
            <CloseScreen />
            <motion.div
              style={{
                bottom: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                padding: 16,
                paddingBottom: 128,
                zIndex: 20,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: charging && power ? 0 : 400,
                 scale: charging && power ? 1 : 0,
                opacity: charging && power ? 1 : 0,
                transition: {
                  duration: 1,
                },
               
              }}
            >
              <MainScreen />
            </motion.div>

            <BottomPlatform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
