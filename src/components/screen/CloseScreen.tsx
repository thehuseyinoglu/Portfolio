import React from "react";
import { delay, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const CloseScreen = () => {
  const { power, charging } = useSelector((state: RootState) => state.phone);
  return (
    <div className="h-full w-full flex justify-between flex-col relative z-10">
      <div className="flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: charging && power ? -200 : 0,
            transition: {
              duration: 2,
            },
          }}
        >
          <svg viewBox="0 0 185 258" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-2" fill="white">
                <path
                  height={500}
                  d="M115.913 182.985c0 12.252-9.933 22.185-22.185 22.185-12.252 0-22.185-9.933-22.185-22.185 0-12.252 9.933-22.185 22.185-22.185 12.252 0 22.185 9.933 22.185 22.185"
                />
              </mask>
            </defs>
            <g id="Group-37" fill="none" fill-rule="evenodd">
              <g id="machine">
                <path
                  d="M127.633 66.52H63.62c-.824 0-1.493.67-1.493 1.494v9.382c0 .825.67 1.494 1.494 1.494h64.013c.825 0 1.494-.67 1.494-1.494v-9.382c0-.825-.67-1.494-1.494-1.494"
                  id="Fill-7"
                  fill="#4C6887"
                ></path>
                <path
                  d="M151.508 92.585L129.392 75.04h-67.43L39.85 92.585z"
                  id="Fill-20"
                  fill="#ECF4FC"
                ></path>
                <path
                  d="M42.042 56.534l15.404 12.22h78.464l15.403-12.22z"
                  id="Fill-21"
                  fill="#B22417"
                ></path>
                <path
                  d="M17.427 92.176h150.07c1.11 0 2.014.902 2.014 2.015l.002 11.23c0 1.113-.904 2.015-2.017 2.015H17.425c-1.11 0-2.014-.902-2.014-2.016l.002-11.23c0-1.112.902-2.014 2.014-2.014"
                  id="Fill-35"
                  fill="#4C6887"
                ></path>
                <path
                  d="M42.028 56.535h109.287V.96H42.028z"
                  id="Fill-22"
                  fill="#D5E0EC"
                ></path>
                <path
                  d="M12.483 114.46h170.533c1.31 0 2.168-1.035 1.593-1.924l-9.99-15.432c-.298-.46-.916-.75-1.594-.75H12.153c-.678 0-1.296.29-1.594.75L.57 112.536c-.575.89.282 1.925 1.593 1.925h10.32z"
                  id="Fill-36"
                  fill="#D5E0EC"
                ></path>
              </g>
            </g>
          </svg>
        </motion.div>
      </div>

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
      >
        <div className="spinner-box">
          {charging == true && power == true ? null : (
            <>
              <div className="blue-orbit leo"></div>
              <div className="green-orbit leo"></div>
              <div className="red-orbit  leo"></div>
              <div className="white-orbit  leo"></div>
            </>
          )}

          <motion.div
            style={{ zIndex: 1 }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: charging && power ? 0 : 1,
              scale: charging && power ? 600 : charging ? 2 : 1,
              transition: {
                duration: 2,
              },
            }}
          >
            <div className=" bg-white opacity-1 neon rounded-full   w-4 h-4  "></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CloseScreen;
