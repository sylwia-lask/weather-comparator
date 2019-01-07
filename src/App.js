import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './theme/global-styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTint, faPlus, faTimes, faWind, faSun, faMoon, 
  faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faTint, faPlus, faTimes, faWind, faSun, faMoon, faArrowLeft, faArrowRight);

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
