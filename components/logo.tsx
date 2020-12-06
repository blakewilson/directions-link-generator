import { FC } from "react";
import useAddress from "../hooks/useAddress";
import styles from "../styles/logo.module.css";

const Logo: FC = () => {
  const { clearAddress } = useAddress();
  return (
    <div className={styles.logo}>
      <svg
        onClick={() => clearAddress()}
        width="100px"
        height="100px"
        viewBox="0 0 3963 3963"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Logo">
            <rect
              id="Rectangle"
              fill="#FFFFFF"
              x="0"
              y="0"
              width="3963"
              height="3963"
              rx="1051"
            ></rect>
            <path
              d="M3618.90028,1862.10937 L2100.10305,343.359375 C2034.2885,277.546875 1927.12892,277.546875 1862.15815,343.359375 L343.36091,1862.10937 C277.546363,1927.92187 277.546363,2035.07812 343.36091,2100.89062 L1862.15815,3618.79687 L1862.15815,3619.64062 C1927.97269,3685.45312 2035.13228,3685.45312 2100.94682,3619.64062 L3619.74406,2100.89062 C3685.5586,2034.23437 3685.5586,1927.92187 3618.90028,1862.10937 Z M2318.64109,2402.95312 L2318.64109,1981.07812 L1643.6201,1981.07812 L1643.6201,2487.32812 L1306.1096,2487.32812 L1306.1096,1812.32812 C1306.1096,1718.67187 1381.20569,1643.57812 1474.86485,1643.57812 L2318.64109,1643.57812 L2318.64109,1221.70312 L2909.28446,1812.32812 L2318.64109,2402.95312 Z"
              id="Shape"
              fill="#018000"
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
