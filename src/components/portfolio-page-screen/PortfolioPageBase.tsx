import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import AboutPage from "./AboutPage";
import MainPage from "./MainPage";
import { motion } from "framer-motion";
import Projects from "./Projects";

const PortfolioPageBase = () => {
  const { page, robotState } = useSelector((state: RootState) => state.menu);

  

  return (
    <div>
      <div className="container">
        <div className="newsletter min-h-[650px] newsletter-base">
          {/* {returnMenuPage()} */}
          
          <motion.div
            style={{ position: "absolute", zIndex: 90 }}
            initial={{ scale: 0 }}
            animate={{ scale: page == 2 ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
              delay:1
            }}
          >
            <Projects />
          </motion.div>
          <motion.div
            style={{ position: "absolute", zIndex: 80 }}
            initial={{ scale: 0 }}
            animate={{ scale: page == 1 ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
              delay:1
            }}
          >
            <AboutPage />
          </motion.div>
          <motion.div
            style={{ position: "absolute", zIndex: 70 }}
            initial={{ scale: 0 }}
            animate={{ scale: page == 0 ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
              delay:1
            }}
          >
            <MainPage />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageBase;
