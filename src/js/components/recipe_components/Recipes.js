import React, { Component } from 'react';

import Loader from '../info_components/Loader';
import Recipe_Detail from './Recipe_Details'

const Recipes = ({recipes}) => {
  if(!recipes){
    return (
      <div>
        <h2>Todays Suggestions</h2>
        < Loader />
      </div>
    );
  }

  return (
    <Recipe_Detail recipes={recipes} />
  )
}

export default Recipes
