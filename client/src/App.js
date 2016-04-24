import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Nav from './components/Nav';
import Header from './components/Header';
import SectionList from './containers/SectionList';
import Aside from './components/Aside';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

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
        <SectionList/>
        <Aside/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>, document.querySelector('#app'));