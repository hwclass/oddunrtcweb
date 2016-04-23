import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Aside from './components/Aside';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : 'ODDUNRTC WEB SITE',
      contents : [
        {title : 'about', heading : 'İhtiyacınız olan şeyi biliyoruz', text : 'Ekstra donanım, yazılım ve eklentiye gerek yok. Her gün kullandığın bir internet tarayıcısı yeterli!'},
        {title : 'servies', heading : 'ÖZELLİKLER', text : 'services text.'},
        {title : 'portfolio', heading : 'portfolio heading', text: 'portfolio text'},
        {title : 'contact', heading : 'İLETİŞİME GEÇ!', text: 'Bir sonraki görüşmeni bizle yapmaya ne dersin? Hemen mail at ya da ara, hesabını oluşturalım.'}
      ]
    }
  }
  render() {

    const contents = this.state.contents.map((content) => {
      return <Content key={Math.random(new Date().getUTCMilliseconds() * 100)} content={content}/>;
    })

    return (
      <div className="container">
        <Nav/>
        <Header/>
        {this.state.title}
        {contents}
        <Aside/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));