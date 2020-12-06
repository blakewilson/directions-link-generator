import { FC } from "react";
import styles from "../styles/productHunt.module.css";

const ProductHunt: FC = () => {
  return (
    <a
      className={styles.productHunt}
      href="https://www.producthunt.com/posts/google-maps-directions-link-generator?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-google-maps-directions-link-generator"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=172473&theme=light&period=daily"
        alt="Google Maps Directions Link Generator - Generate a Google Maps directions link to your business | Product Hunt Embed"
        width="250px"
        height="54px"
      />
    </a>
  );
};

export default ProductHunt;
