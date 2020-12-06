import { FC } from "react";
import styles from "../styles/about.module.css";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.sectionHeader}>About This Project</h2>
      <p>
        Google Maps Directions Link Generator lets you quickly enter a business
        name or address, then will generate a link for you to get directions
        from Google Maps to that location.
      </p>
      <p>
        Google will do its best to find the address/business name that you
        provide, so the more specific the better.
      </p>
      <p id="examples">Here are some examples:</p>
      <h3 className={styles.headerGood}>Good</h3>
      <p className={[styles.example, styles.exampleGood].join(" ")}>
        1 Infinite Loop, Cupertino, CA 95014
      </p>
      <p className={styles.exampleHelper}>
        A full address is the most specific, and should always resolve
        correctly.
      </p>

      <h3 className={styles.headerGood}>Good</h3>
      <p className={[styles.example, styles.exampleGood].join(" ")}>
        Apple Infinite Loop, 1 Infinite Loop, Cupertino, CA 95014
      </p>
      <p className={styles.exampleHelper}>
        Or a full address with a business name.
      </p>

      <h3 className={styles.headerGood}>Good</h3>
      <p className={[styles.example, styles.exampleGood].join(" ")}>
        Wall Street, NYC
      </p>
      <p className={styles.exampleHelper}>
        Providing a specific place, followed by the city will work in most
        cases. Unless there are more than one "Wall Street" in that city, then
        Google will make a best guess.
      </p>

      <h3 className={styles.headerBad}>Bad</h3>
      <p className={[styles.example, styles.exampleBad].join(" ")}>
        McDonalds, Los Angeles 90016
      </p>
      <p className={styles.exampleHelper}>
        This is too generic. Google will not be able to effectively determine
        which McDonalds you are referring to since there are likely multiple
        McDonalds in a zip code.
      </p>
    </section>
  );
};

export default About;
