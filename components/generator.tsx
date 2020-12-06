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
    <section>
      <div className="container">
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

      <style jsx>{`
        section {
          background-color: #f2f2f2;
          min-height: 70vh;
          padding-top: 2rem;
          padding-bottom: 2rem;

          position: relative;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 760px) {
          section {
            min-height: 50vh;
          }
        }

        .logo {
          text-align: center;
          margin-bottom: 1rem;
        }

        .logo svg {
          cursor: pointer;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          border-radius: 2rem;
        }

        .examples {
          color: #018000;
          text-decoration: none;
        }

        .helper-text {
          margin-left: 1.5rem;
          line-height: 1.5;
        }

        .helper-text a {
          color: #018000;
          text-decoration: none;
        }

        .container {
          width: 100%;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .address,
        .link {
          appearance: none;
          width: 100%;
          border: 0;
          font-size: 1.5rem;
          padding: 0.75rem 1.5rem;
        }

        .link {
          cursor: no-drop;
        }

        .sep {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .sep svg {
          width: 25px;
          height: auto;
        }

        .sep svg * {
          fill: #444;
        }

        h1 {
          margin-top: 0;
          font-size: 2rem;
          text-align: center;
          font-weight: normal;
          line-height: 1.5;
        }

        .result {
          display: flex;
        }

        .result input {
          color: green;
          outline: 0;
        }

        .result button {
          appearance: none;
          padding: 0 1.5rem;
          border: 0;
          font-size: 1rem;
          background-color: green;
          color: #fff;
          cursor: pointer;
        }

        @media (max-width: 780px) {
          .product-hunt {
            display: none;
          }
        }

        .product-hunt {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .product-hunt img {
          width: 200px;
        }
      `}</style>

      <ProductHunt />
    </section>
  );
};

export default Generator;
