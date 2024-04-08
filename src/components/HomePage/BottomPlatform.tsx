import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const BottomPlatform = () => {
  const { charging,power } = useSelector((state: RootState) => state.phone);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
      <div className="relative">
        <div
          className={`absolute bottom-5  left-3  w-2 h-2 rounded-full ${
            charging ? "bg-green-600 animate-pulse" : "bg-red-600"
          }`}
        ></div>
        <div
          className={`absolute bottom-8 bg-white ease-in duration-500  w-[214px] h-2 rounded-full ${
            power&& charging ? "  neon " : " bg-transparent"
          }`}
        ></div>
        <svg viewBox="0 0 185 258" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="mask-2" fill="white">
              <path d="M115.913 182.985c0 12.252-9.933 22.185-22.185 22.185-12.252 0-22.185-9.933-22.185-22.185 0-12.252 9.933-22.185 22.185-22.185 12.252 0 22.185 9.933 22.185 22.185" />
            </mask>
          </defs>
          <g id="Group-37" fill="none" fill-rule="evenodd">
            <g id="machine">
              <path
                d="M66.88 256.96H49.61c-.2 0-.365-.163-.365-.365v-3.58c0-.203.164-.367.366-.367h17.27c.2 0 .365.164.365.366v3.58c0 .203-.164.367-.366.367"
                id="Fill-38"
                fill="#4C6887"
              />
              <path
                d="M136.948 256.96H119.68c-.202 0-.366-.163-.366-.365v-3.58c0-.203.164-.367.366-.367h17.268c.202 0 .366.164.366.366v3.58c0 .203-.164.367-.366.367"
                id="Fill-40"
                fill="#4C6887"
              />
              <path
                d="M167.752 251.242H17.682c-1.112 0-2.015-.902-2.015-2.015V238c0-1.115.903-2.017 2.016-2.017h150.07c1.112 0 2.014.902 2.014 2.016v11.227c0 1.113-.902 2.015-2.015 2.015"
                id="Fill-16"
                fill="#4C6887"
              />
              <path
                d="M172.696 228.957H2.163c-1.31 0-2.168 1.036-1.593 1.925l9.99 15.432c.297.46.915.75 1.593.75h160.872c.678 0 1.296-.29 1.594-.75l9.99-15.432c.574-.89-.283-1.925-1.594-1.925h-10.32z"
                id="Fill-17"
                fill="#D5E0EC"
              />
              <path
                d="M73.897 253.96H42.594c-.27 0-.49-.22-.49-.49v-3.332c0-.27.22-.49.49-.49h31.303c.27 0 .49.22.49.49v3.333c0 .27-.22.49-.49.49"
                id="Fill-18"
                fill="#4C6887"
              />
              <path
                d="M143.966 253.96h-31.303c-.27 0-.49-.22-.49-.49v-3.332c0-.27.22-.49.49-.49h31.303c.27 0 .49.22.49.49v3.333c0 .27-.22.49-.49.49"
                id="Fill-19"
                fill="#4C6887"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BottomPlatform;
