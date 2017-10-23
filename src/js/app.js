import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components
import Header from './components/header_components/Header';
import MoreInfo from './components/info_components/More_Info';
// Import CSS
import '../css/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <MoreInfo />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

