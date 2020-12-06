import Head from "next/head";
import React from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Generator from "../components/generator";

const Home = () => {
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
      </Head>

      <main>
        <Generator />
        <About />

        <Footer />
      </main>
    </>
  );
};

export default Home;
