import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault(); this.props.onFormSubmit(e.target.Ingredients.value);}}>
        <input type='text' placeholder="Enter some ingredients" name="Ingredients"/>
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default Searchbar;
