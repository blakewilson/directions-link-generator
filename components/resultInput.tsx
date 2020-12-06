import { FC, useRef } from "react";
import { RESULT_INPUT_ID, RESULT_INPUT_NAME } from "../constants";
import useGoogleMapsUrl from "../hooks/useGoogleMapsUrl";
import styles from "../styles/resultInput.module.css";

const ResultInput: FC = () => {
  const resultInputRef = useRef(null);
  const resultUrl = useGoogleMapsUrl();

  if (!resultUrl) {
    return null;
  }

  return (
    <div className={styles.result}>
      <input
        ref={resultInputRef}
        name={RESULT_INPUT_NAME}
        className={styles.resultInput}
        id={RESULT_INPUT_ID}
        readOnly
        onClick={(e) => {
          (e.target as HTMLInputElement).select();
        }}
        value={resultUrl}
      />

      <button
        className={styles.resultButton}
        onClick={(e) => {
          resultInputRef.current.select();
          document.execCommand("copy");
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default ResultInput;
