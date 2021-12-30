/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './styles.scss';
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
