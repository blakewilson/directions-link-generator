import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Generator from "../components/generator";
import ReactGA from "react-ga";
import About from "../components/about";

const Home = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-132058143-6", {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Google Maps Directions Link Generator</title>
        <meta
          name="description"
          content="Google Maps Directions Link Generator will create a get directions link in Google Maps for you to use on your website for customers to instantly get directors to your company."
        ></meta>
        <meta
          name="og:title"
          property="og:title"
          content="Google Maps Directions Link Generator"
        ></meta>

        <link href="https://directionslinkgenerator.com" rel="canonical"></link>

        <link
          rel="icon"
          type="image/png"
          href="static/favicon-32x32.png"
          sizes="32x32"
        ></link>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-132058143-6"
        ></script>
      </Head>

      <main>
        <Generator />
        <About />
      </main>

      <style jsx>{`
        :global(body) {
          color: #444;
        }

        h2 {
          font-weight: normal;
        }

        p {
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default Home;
