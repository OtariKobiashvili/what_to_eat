import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
        <form>
          <input type='text' placeholder="Enter some ingredients"/>
          <button type='submit'>Search</button>
        </form>
    )
  }
}

export default Searchbar;
