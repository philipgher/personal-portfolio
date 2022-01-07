import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Background from '../components/Background';

const HomePage = () => {
  return (
    <>
      <Background />

      <Head>
        <title>{'Philip Ghering | Portfolio'}</title>
        <link rel="icon" href="/favicon_128.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="content-wrapper">
        <h1 className="main">{'Frontend Developer'}</h1>
      </div>

      <div className="subtext">
        <p>
          <span>
            {'Hi! I am Philip, a Frontend Developer and Creative Coder. I\'ve'}
          </span>
          <br />
          <span>
            {'worked on '}
            <a href="https://random.studio/projects/a-series-of-digital-experiments-for-space10" target="_blank" rel="noreferrer">
              {'research'}
            </a>
            {', '}
            <a href="https://augustgetty.com/" target="_blank" rel="noreferrer">
              {'experiential'}
            </a>
            {', '}
            <a href="https://cinekid-parallel-archaeologies.netlify.app/" target="_blank" rel="noreferrer">
              {'artsy'}
            </a>
            {' and '}
            <a href="https://th.outlet-catalog.com/outlet/AU64/en_GB" target="_blank" rel="noreferrer">
              {'corporate'}
            </a>
            {' projects '}
          </span>
          <br />
          <span>
            {'as well as '}
            <a href="https://random.studio/projects/interactive-retail-fixture-for-tommy-hilfiger" target="_blank" rel="noreferrer">
              {'interactive installations'}
            </a>
            {' and '}
            <a href="https://random.studio/projects/an-archival-experience-celebrating-c-p-companys-50th-anniversary" target="_blank" rel="noreferrer">
              {'experiences'}
            </a>
            {'.'}
          </span>
        </p>
      </div>

      <div className="footer" />
    </>
  );
};

export default HomePage;
