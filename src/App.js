import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

library.add(fab, far, fas);
const store = configureStore();

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
	      <BrowserRouter>
	      <div>
	        <Main />    
	      </div>
	      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
