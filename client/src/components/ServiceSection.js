import React, { Component } from 'react';
import { features, noExtras, cloud, madeWithLove, knowWhatYouNeed } from './../constants';

const ServiceSection = (props) => {
  const classes = {};
  const customAttrs = {};
  return(
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">{features}</h2>
            <hr className="primary"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
              <h3>{caption.noSetup}</h3>
              <p className="text-muted">{noExtras}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
              <h3>{caption.fastCreate}</h3>
              <p className="text-muted">{caption.onlyOneMinute}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
              <h3>{caption.alwaysUpToDate}</h3>
              <p className="text-muted">{cloud}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
              <h3>{madeWithLove}</h3>
              <p className="text-muted">{knowWhatYouNeed}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServiceSection;