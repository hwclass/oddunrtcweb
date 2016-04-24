import React, { Component } from 'react';

const Section = (props) => {
  const classes = {};
  const customAttrs = {};
  return(
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">{props.section.heading}</h2>
            <hr className="light"/>
            <p className="text-faded">{props.section.text}</p>
            <a href="#" className="btn btn-default btn-xl">HADİ BAKALIM!</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Section;