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
        This website is open source.{" "}
        <a
          target="_blank"
          href="https://github.com/blakewilson/directions-link-generator"
        >
          View the source here.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
