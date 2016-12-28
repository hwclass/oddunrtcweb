import React, { Component } from 'react';
import { realTimeCommunication, untilBetter, more } from './../constants';

require('bootstrap/dist/js/bootstrap.min');

const Header = () => {
  return(
    <header>
      <div className="header-content">
        <div className="header-content-inner">
          <h1>{realTimeCommunication}</h1>
          <hr/>
          <p>{untilBetter}</p>
          <a href="#about" className="btn btn-primary btn-xl page-scroll">{more}</a>
        </div>
      </div>
    </header>
  )
};

export default Header;