import { FC } from "react";
import useGoogleMapsUrl from "../hooks/useGoogleMapsUrl";
import { useStore } from "../store";
import styles from "../styles/testLink.module.css";

const TestLink: FC = () => {
  const { state } = useStore();
  const { address } = state;
  const gMapsUrl = useGoogleMapsUrl();

  if (!address || !gMapsUrl) {
    return null;
  }

  return (
    <p className={styles.helperText}>
      Test your link:{" "}
      <a target="_blank" href={gMapsUrl + encodeURI(address)}>
        Get Directions to {address}
      </a>
    </p>
  );
};

export default TestLink;
