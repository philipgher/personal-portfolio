import React from 'react';

import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';

const Header = () => {
  return (
    <header className="header">
      <h1>
        {'Philip'}
        <br />
        {'Ghering'}
      </h1>

      <div>
        <a className="link" href="https://www.linkedin.com/in/philip-ghering-942460115/" target="_blank" rel="noreferrer">
          <LinkedInIcon width="20px" height="20px" />
        </a>

        <a className="link" href="https://github.com/philipgher" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
