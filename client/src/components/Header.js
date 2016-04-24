import React, { Component } from 'react';
require('bootstrap/dist/js/bootstrap.min');
const Header = () => {
  return(
    <header>
      <div className="header-content">
        <div className="header-content-inner">
          <h1>GERÇEK ZAMANLI VİDEOLU İLETİŞİM</h1>
          <hr/>
          <p>Daha iyisi yapılana kadar en iyi WebRTC destekli iletişim aracı.</p>
          <a href="#about" className="btn btn-primary btn-xl page-scroll">Dahası..</a>
        </div>
      </div>
    </header>
  )
};

export default Header;