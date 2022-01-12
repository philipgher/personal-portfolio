import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import styles from './Background.module.scss';

const sin = (value) => { return (Math.sin(value) + 1) / 2; };

const Cloud = ({ tick, windowX, windowY }) => {
  const [sizeX] = useState(Math.random() * (windowX / 2.5) + (windowX / 4));
  const [sizeY] = useState(Math.random() * (windowY / 2.5) + (windowY / 4));
  const [posX] = useState(Math.random() * 70 - 15);
  const [posY] = useState(Math.random() * 70 - 15);

  return (
    <div
      className={styles.cloudWrapper}
    >
      <div
        className={styles.cloudCirle}
        style={{
          top: `calc(-200vh + ${posY}vh)`,
          left: `calc(-200vw + ${posX}vw)`,
          transform: `translate3d(${sin(tick / 10) + 0.3}, ${sin(tick / 10 + Math.PI)}, 0)`,
          width: `${sizeX}px`,
          height: `${sizeY}px`,
          boxShadow: `200vw 200vh ${(sizeX + sizeY) / 4}px 0px white`,
        }}
      />
    </div>
  );
};

Cloud.propTypes = {
  tick: PropTypes.number.isRequired,
  windowX: PropTypes.number.isRequired,
  windowY: PropTypes.number.isRequired,
};

const Background = () => {
  const isAnimationCancelled = useRef(false);
  const frameDropCounter = useRef(0);
  const prevTime = useRef(Date.now());

  const [tick, setTick] = useState(Math.random() * (Math.PI * 2));

  const [windowX, setWindowX] = useState(null);
  const [windowY, setWindowY] = useState(null);

  const ticker = useCallback(() => {
    if (isAnimationCancelled.current === true) {
      return;
    }

    const timeElapsed = Date.now() - prevTime.current;

    if (timeElapsed > 200) {
      frameDropCounter.current += 1;

      if (frameDropCounter.current > 5) {
        isAnimationCancelled.current = true;
        console.warn('Background cloud animation got cancelled due to 5 framedrops');
      }
    }

    if (timeElapsed > 1000) {
      isAnimationCancelled.current = true;
      console.warn('Background cloud animation got cancelled due to 1 long framedrop');
    }

    prevTime.current = Date.now();

    setTick((prevTick) => { return prevTick + 0.001; });

    requestAnimationFrame(ticker);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowX(window.innerWidth);
      setWindowY(window.innerHeight);
    }

    ticker();
  }, []);

  const baseFreq = 0.01 + sin(tick / 10) * 0.05;
  // const baseFreq = 0.01;
  const scale = sin(tick) * 300 + 150;
  // const scale = 500;

  if (!windowX && !windowY) {
    return null;
  }

  return (
    <div className={styles.container} style={{ '--hUpper': sin(tick) * 40, '--hLower': sin(tick + 0.5 * 40) }}>
      <Cloud tick={tick} windowX={windowX} windowY={windowY} />
      <Cloud tick={tick} windowX={windowX} windowY={windowY} />
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency={baseFreq} numOctaves="4" />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
      </svg>
    </div>
  );
};

Background.propTypes = {};

export default Background;
