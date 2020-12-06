import { FC } from "react";
import useAddress from "../hooks/useAddress";
import styles from "../styles/resultsSeparator.module.css";

const ResultsSeparator: FC = () => {
  const { address } = useAddress();

  if (!address) {
    return null;
  }

  return (
    <div className={styles.sep}>
      <svg width="630px" height="639px" viewBox="0 0 630 639" version="1.1">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Arrow"
            transform="translate(-21.000000, 0.000000)"
            fill="#000000"
          >
            <g id="Arrow-Up">
              <path
                d="M94,152 L235,152 L235,619 C235,630.045695 226.045695,639 215,639 L114,639 C102.954305,639 94,630.045695 94,619 L94,152 Z"
                id="Rectangle"
              ></path>
              <path
                d="M180.187032,19.8352742 L303.370955,175.59367 C310.222782,184.257378 308.753962,196.835205 300.090254,203.687032 C296.558272,206.480354 292.186982,208 287.683923,208 L41.3160767,208 C30.2703817,208 21.3160767,199.045695 21.3160767,188 C21.3160767,183.496941 22.8357232,179.125651 25.629045,175.59367 L148.812968,19.8352742 C155.664795,11.1715658 168.242622,9.70274577 176.90633,16.5545729 C178.123467,17.5171642 179.22444,18.6181375 180.187032,19.8352742 Z"
                id="Triangle"
              ></path>
            </g>
            <g
              id="Arrow-Up"
              transform="translate(507.500000, 319.500000) rotate(-180.000000) translate(-507.500000, -319.500000) translate(343.000000, 0.000000)"
            >
              <path
                d="M94,152 L235,152 L235,619 C235,630.045695 226.045695,639 215,639 L114,639 C102.954305,639 94,630.045695 94,619 L94,152 Z"
                id="Rectangle"
              ></path>
              <path
                d="M180.187032,19.8352742 L303.370955,175.59367 C310.222782,184.257378 308.753962,196.835205 300.090254,203.687032 C296.558272,206.480354 292.186982,208 287.683923,208 L41.3160767,208 C30.2703817,208 21.3160767,199.045695 21.3160767,188 C21.3160767,183.496941 22.8357232,179.125651 25.629045,175.59367 L148.812968,19.8352742 C155.664795,11.1715658 168.242622,9.70274577 176.90633,16.5545729 C178.123467,17.5171642 179.22444,18.6181375 180.187032,19.8352742 Z"
                id="Triangle"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ResultsSeparator;
