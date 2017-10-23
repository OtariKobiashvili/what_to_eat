import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css'; // Import CSS

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>What to Eat?</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

