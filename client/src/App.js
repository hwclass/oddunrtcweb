import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : 'ODDUNRTC WEB SITE'
    }
  }
  render() {
    return (
      <div className="container">
        <Nav/>
        <Header/>
        {this.state.title}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));