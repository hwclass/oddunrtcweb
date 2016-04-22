import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        {this.state.title}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));