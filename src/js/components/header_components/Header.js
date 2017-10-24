import React, { Component } from 'react';

import Searchbar from './Searchbar';

class Header extends Component {
  render() {
    return (
      <header className='hero container'>
        <div id='search'>
          <h2>Whats for Dinner?</h2>
          < Searchbar />
        </div>
      </header>
    )
  }
}

export default Header;
