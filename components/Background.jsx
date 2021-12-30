import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Background.module.scss';

const sin = (value) => { return (Math.sin(value) + 1) / 2; };

const Cloud = ({ tick, driftBy }) => {
  const [sizeX] = useState(Math.random() * 600 + 300);
  const [sizeY] = useState(Math.random() * 600 + 300);
  const [posX] = useState(Math.random() * 110 - 20);
  const [posY] = useState(Math.random() * 110 - 20);
  const [scaleOffset] = useState(Math.random() * 15);

  const baseFreq = 0.001 + sin((tick * driftBy) / 10) * 0.02;
  const scale = sin(tick * driftBy * scaleOffset) * 300 + 100;

  return (
    <div
      className={styles.cloudWrapper}
    >
      <div
        className={styles.cloudCirle}
        style={{
          top: `calc(-200vh + ${posY}vh)`,
          left: `calc(-200vw + ${posX}vw)`,
          width: `${sizeX}px`,
          height: `${sizeY}px`,
          boxShadow: `200vw 200vh ${(sizeX + sizeY) / 4}px 0px #fff`,
        }}
      />
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency={baseFreq} numOctaves="10" />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
      </svg>
    </div>
  );
};

Cloud.propTypes = {
  tick: PropTypes.number.isRequired,
  driftBy: PropTypes.number.isRequired,
};

const Background = () => {
  const [tick, setTick] = useState(0);

  const ticker = useCallback(() => {
    setTick((prevTick) => { return prevTick + 0.001; });
    requestAnimationFrame(ticker);
  }, []);

  useEffect(() => {
    ticker();
  }, []);

  return (
    <div className={styles.container}>
      <Cloud tick={tick} driftBy={0.2} />
      <Cloud tick={tick} driftBy={0.8} />
      <Cloud tick={tick} driftBy={1.2} />
      <Cloud tick={tick} driftBy={1.6} />
      <Cloud tick={tick} driftBy={2.0} />
      <Cloud tick={tick} driftBy={2.4} />
    </div>
  );
};

Background.propTypes = {};

export default Background;
