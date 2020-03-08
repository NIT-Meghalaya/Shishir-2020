import React from 'react';
import './header.styles.scss'
import Svg from './svg-component/svg';

const Header = (props) => (
  <header className="header">
    <div className="hero__box">
      <div className="left">
        <div>
        <img src="/images/logo.png" className="logo"/>
        <h1>Shishir 2020</h1>
        </div>
      </div>
      <div className="right">
        <Svg
          fill="#000"
          width="90%"
          height="90%"
          className="svg"
          viewBox="0 0 1099.2 725.77"
        />
      </div>
    </div>
  </header>
);
export default Header;

