import { FC, useRef } from "react";
import { RESULT_INPUT_ID, RESULT_INPUT_NAME } from "../lib/constants";
import useGoogleMapsUrl from "../hooks/useGoogleMapsUrl";
import styles from "../styles/resultInput.module.css";
import useCopyNotification from "../hooks/useCopyNotification";

const ResultInput: FC = () => {
  const { setNotificationVisibility } = useCopyNotification();
  const resultInputRef = useRef<HTMLInputElement>(null);
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
          if (resultInputRef.current !== null) {
            resultInputRef.current.select();
            document.execCommand("copy");

            setNotificationVisibility(true);
          }
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default ResultInput;
