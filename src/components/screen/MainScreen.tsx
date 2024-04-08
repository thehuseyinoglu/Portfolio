import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import Robot from "../items/Robot";
import { motion } from "framer-motion";
import PortfolioPageBase from "../portfolio-page-screen/PortfolioPageBase";
import { changeRobotStateDisabled } from "src/store/features/menuSlice";

const MainScreen = () => {
  // const [robotState, setRobotState] = useState(false);

  const { menuPage, robotState } = useSelector(
    (state: RootState) => state.menu
  );
  const dispatch = useDispatch();

  const returnMenuPage = () => {
    switch (menuPage) {
      case 0:
        return <PortfolioPageBase />;

      case 1:
        return null;

      default:
        return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeRobotStateDisabled(false))
    }, 2000); // 4 saniye sonra first'i false yap
    return () => clearTimeout(timer);
  }, [robotState]);

  const { charging, power } = useSelector((state: RootState) => state.phone);
  return (
    <div className="w-full h-full main-screen z-20">
      <div className="w-full p-4 flex  flex-row gap-2">
        <div className="w-3 h-3 bg-[#FF5F57] rounded-full"></div>
        <div className="w-3 h-3 bg-[#FEBC30] rounded-full"></div>
        <div className="w-3 h-3 bg-[#2BC840] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center items-center h-full relative">
        {charging && power && returnMenuPage()}

        {/* <button onClick={() => setRobotState(true)}>dasdas</button> */}

        <motion.div
          style={{
            position: "absolute",
          }}
          initial={{ x: 1000 }}
          animate={{ x: robotState ? 8 : 1000 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 100,
          }}
        >
          <Robot />
        </motion.div>
      </div>
    </div>
  );
};

export default MainScreen;
