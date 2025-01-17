import React from "react";
import useAddress from "../hooks/useAddress";
import styles from "../styles/generator.module.css";
import AddressInput from "./addressInput";
import CopyNotification from "./copyNotification";
import Logo from "./logo";
import ProductHunt from "./productHunt";
import ResultInput from "./resultInput";
import ResultsSeparator from "./resultsSeparator";
import TestLink from "./testLink";

const Generator = () => {
  const { setInitialAddress } = useAddress();

  setInitialAddress();

  return (
    <section className={styles.generatorSection}>
      <div className={styles.container}>
        <Logo />

        <h1 className={styles.pageTitle}>
          Google Maps Directions Link Generator
        </h1>

        <AddressInput />
        <ResultsSeparator />
        <ResultInput />
        <TestLink />
      </div>

      <CopyNotification />

      <ProductHunt />
    </section>
  );
};

export default Generator;
