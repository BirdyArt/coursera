import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from './components/MainComponent';
import './App.css';

library.add(fab, far, fas);

class App extends Component {
 
  render() {
    return (
      <div>
        <Main />    
      </div>
    );
  }
}

export default App;
