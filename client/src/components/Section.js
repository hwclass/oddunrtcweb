import React, { Component } from 'react';
import { caption } from './../constants';

const Section = (props) => {
  const classes = {};
  const customAttrs = {};
  return(
    <section className="bg-primary" id={props.section.title}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">{props.section.heading}</h2>
            <hr className="light"/>
            <p className="text-faded">{props.section.text}</p>
            <a href="#" className="btn btn-default btn-xl">{caption}</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Section;