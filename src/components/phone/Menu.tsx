import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePage, changeRobotState } from "src/store/features/menuSlice";
import { motion } from "framer-motion";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  function onTap(event: any, info: any) {
    setShowMenu(prev=>!prev);
  }

  function onTapMenuOne(event: any, info: any) {
    dispatch(changeRobotState());
          dispatch(changePage(0));
  }
  function onTapMenutwo(event: any, info: any) {
    dispatch(changeRobotState());
    dispatch(changePage(1));
  }

  return (
    <div className="flex flex-wrap  gap-6">
      {/* <div 
        onClick={() => {
          dispatch(changeRobotState());
          dispatch(changePage(0));
        }}
        className="w-10 h-10 bg-red-600"
      >
        page 1
      </div>

      <div
        onClick={() => {
          dispatch(changeRobotState());
          dispatch(changePage(1));
        }}
        className="w-10 h-10 bg-red-600"
      >
        page 2
      </div>
      <div
        onClick={() => {
          dispatch(changeRobotState());
          dispatch(changePage(2));
        }}
        className="w-10 h-10 bg-red-600"
      >
        page 3
      </div> */}

      <div className="flex items-center justify-center flex-col ">
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.7 }}
          onTap={onTap}
        >
          <div className="w-[50px] h-[50px] bg-blue-500 rounded-xl flex gap-x-1 items-center justify-center flex-wrap p-2">
            <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
          </div>
        </motion.button>
        <span className="text-[12px] text-white">Menu</span>
      </div>

      {showMenu && (
        <>
          
<motion.div
           
            initial={{  opacity: 0 }}
            animate={{
              opacity: showMenu ? 1 : 0,
            
              transition: {
                duration: 1 ,
              },
            }}
          >
            <div className="absolute top-24 rounded-[30px] left-1/2 transform -translate-x-1/2  w-[200px] h-[200px] menu-glass flex flex-row gap-3 justify-center items-start p-4">
            <div className="flex items-center justify-center flex-col ">
              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.7 }}
                onTap={onTapMenuOne}
              >
                <div className="w-[50px] h-[50px] bg-blue-500 rounded-xl flex gap-x-1 items-center justify-center flex-wrap p-2">
                  <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                </div>
              </motion.button>
              <span className="text-[12px] text-white">Menu</span>
            </div>
            <div className="flex items-center justify-center flex-col ">
              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.7 }}
                onTap={onTapMenutwo}
              >
                <div className="w-[50px] h-[50px] bg-blue-500 rounded-xl flex gap-x-1 items-center justify-center flex-wrap p-2">
                  <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                </div>
              </motion.button>
              <span className="text-[12px] text-white">Menu</span>
            </div>
           
          </div>
          </motion.div>
        </>
      )}













    </div>
  );
};

export default Menu;
