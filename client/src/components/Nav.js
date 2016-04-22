import React, { Component } from 'react';

const Nav = () => {
  const classes = {};
  const customAttrs = {};
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">ODDUNRTC</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="page-scroll" href="#about">HAKKINDA</a>
            </li>
            <li>
              <a className="page-scroll" href="#services">ÖZELLİKLER</a>
            </li>
            <li>
              <a className="page-scroll" href="#portfolio">EKRAN GÖRÜNTÜLERİ</a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">İLETİŞİM</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Nav;