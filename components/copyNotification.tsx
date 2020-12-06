import { FC, useEffect, useState } from "react";
import useCopyNotification from "../hooks/useCopyNotification";
import styles from "../styles/copyNotification.module.css";

const CopyNotification: FC = () => {
  const {
    isCopyNotificationVisible,
    setNotificationVisibility,
  } = useCopyNotification();

  const [classList, setClassList] = useState([styles.notification]);

  useEffect(() => {
    if (isCopyNotificationVisible === false) {
      return;
    }

    setClassList([styles.notification, styles.isVisible]);

    const timer = setTimeout(() => {
      setClassList([styles.notification]);

      setNotificationVisibility(false);
    }, 2000);
  }, [isCopyNotificationVisible]);

  return (
    <div className={classList.join(" ")}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z" />
      </svg>
      <span>Link copied to clipboard</span>
    </div>
  );
};

export default CopyNotification;
