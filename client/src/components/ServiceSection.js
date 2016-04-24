import React, { Component } from 'react';

const ServiceSection = (props) => {
  const classes = {};
  const customAttrs = {};
  return(
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">ÖZELLİKLER</h2>
            <hr className="primary"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
              <h3>KURULUM YOK</h3>
              <p className="text-muted">Ekstra hiç bir şeye ihtiyaç duymadan müşterilerinizle iletişime geçin.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
              <h3>HIZLI OLUŞTURMA</h3>
              <p className="text-muted">Yalnızca 1 dakikanızı ayırarak ürününüzü oluşturun.!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
              <h3>HER ZAMAN GÜNCEL</h3>
              <p className="text-muted">Bulut teknolojisi sayesinde her zaman güncel, her zaman modern.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
              <h3>AŞKLA YAPTIK</h3>
              <p className="text-muted">İhtiyacınız olan şeyi biliyoruz, bu yüzden aşkla yaptık.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServiceSection;