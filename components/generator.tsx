import React, { useState, useEffect } from "react";
import CopiedMessage from "./copiedMessage";
import Router from "next/router";
import { useStore } from "../store";
import useAddress from "../hooks/useAddress";
import TestLink from "./testLink";
import Logo from "./logo";
import AddressInput from "./addressInput";
import ResultsSeperator from "./resultsSeperator";
import ResultInput from "./resultInput";
import styles from "../styles/generator.module.css";
import ProductHunt from "./productHunt";

const Generator = () => {
  const { state } = useStore();
  const { address } = state;
  const { setAddress } = useAddress();
  // const [address, setAddress] = useState("");
  const [isCopiedMessageVisible, setIsCopiedMessageVisible] = useState(0);

  const gMapsUrl = `https://www.google.com/maps/dir//`;

  useEffect(() => {
    if (process.browser) {
      const localStorage = window.localStorage.getItem("address");
      setAddress(localStorage || "");
    }
  }, []);

  return (
    <section className={styles.generatorSection}>
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.pageTitle}>
          Google Maps Directions Link Generator
        </h1>

        <AddressInput />

        <ResultsSeperator />

        <ResultInput />

        <TestLink />
      </div>

      {useEffect(() => {
        if (isCopiedMessageVisible) {
          const message = document.querySelector(".js-copied-message");

          message.style.bottom = `calc(-${message.clientHeight}px - 1rem)`;

          setTimeout(() => {
            message.style.visibility = "visible";
            message.style.bottom = "1rem";
          }, 200);

          setTimeout(() => {
            message.style.bottom = `calc(-${message.clientHeight}px - 1rem)`;
          }, 3000);

          message.style.visibility = "hidden";
        }
      }, [isCopiedMessageVisible])}

      <CopiedMessage />

      <ProductHunt />
    </section>
  );
};

export default Generator;
