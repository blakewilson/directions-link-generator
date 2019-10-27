import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Generator from '../components/generator'
import App from '../components/app'

const Home = () => {
  return (
    <App>
      <Head>
        <title>Google Maps Directions Link Generator</title>
      </Head>

      <main>
        <Generator />
        <section className="about">
          <h2>About This Project</h2>
          <p>Google Maps Directions Link Generator lets you quickly enter a business name or address, then will generate a link for you to get directions from Google Maps to that location.</p>
          <p>Google will do its best to find the address/business name that you provide, so the more specific the better.</p>
          <p id="examples">Here are some examples:</p>
          <h3 className="header-good">Good</h3>
          <p className="example example-good">1 Infinite Loop, Cupertino, CA 95014</p>
          <p className="example-helper">A full address is the most specific, and should always resolve correctly.</p>

          <h3 className="header-good">Good</h3>
          <p className="example example-good">Apple Infinite Loop, 1 Infinite Loop, Cupertino, CA 95014</p>
          <p className="example-helper">Or a full address with a business name.</p>

          <h3 className="header-good">Good</h3>
          <p className="example example-good">Wall Street, NYC</p>
          <p className="example-helper">Providing a specific place, followed by the city will work in most cases. Unless there are more than one "Wall Street" in that city, then Google will make a best guess.</p>

          <h3 className="header-bad">Bad</h3>
          <p className="example example-bad">McDonalds, Los Angeles 90016</p>
          <p className="example-helper">This is too generic. Google will not be able to effectively determine which McDonalds you are referring to since there are likely multiple McDonalds in a zip code.</p>
        </section>
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

      .about {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        max-width:  760px;
        margin-left: auto;
        margin-right: auto;
      }

      .example {
        padding: .75rem 1.5rem;
        background-color: #f2f2f2;
        white-space: nowrap;
        overflow-x: auto;
      }

      .header-good,
      .header-bad {
        margin-left: 1.5rem;
      }

      .example-good,
      .header-good {
        color: #018000;
      }

      .example-bad,
      .header-bad {
        color: #F44336;
      }

      .example-helper {
        font-size: .9rem;
        margin-top: -.5rem;
        margin-left: 1.5rem;
      }

    `}</style>
    </App>
  )
}

export default Home