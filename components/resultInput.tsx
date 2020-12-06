import { FC } from "react";
import useGoogleMapsUrl from "../hooks/useGoogleMapsUrl";
import styles from "../styles/resultInput.module.css";

const ResultInput: FC = () => {
  const url = useGoogleMapsUrl();

  if (!url) {
    return null;
  }

  return (
    <div className={styles.result}>
      <input
        name="link"
        className={[styles.resultInput, styles.link].join(" ")}
        id="link"
        readOnly
        onClick={(e) => {
          e.target.select();
        }}
        value={url}
      />
      <button
        className={styles.resultButton}
        onClick={(e) => {
          const directionsUrl = document.getElementById("link");
          directionsUrl.select();
          document.execCommand("copy");
          //   setIsCopiedMessageVisible(1);
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default ResultInput;
