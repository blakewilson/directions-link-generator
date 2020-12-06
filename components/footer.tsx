import { FC } from "react";
import styles from "../styles/footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        Made by{" "}
        <a href="https://twitter.com/sundaycode" target="_blank">
          @sundaycode
        </a>
      </div>

      <div className={styles.section}>
        <a
          target="_blank"
          href="https://github.com/blakewilson/directions-link-generator"
        >
          This website is open source.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
