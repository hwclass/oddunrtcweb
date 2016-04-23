import React, { Component } from 'react';

const Aside = () => {
  const classes = {};
  const customAttrs = {};
  return(
    <aside className="bg-dark" style={{display: 'none'}}>
      <div className="container text-center">
        <div className="call-to-action">
          <h2>Free Download at Start Bootstrap!</h2>
          <a href="#" className="btn btn-default btn-xl wow tada">Download Now!</a>
        </div>
      </div>
    </aside>
  )
};

export default Aside;