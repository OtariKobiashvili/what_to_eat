import React, { Component } from 'react';

import Loader from '../info_components/Loader';
import Recipe_Detail from './Recipe_Details'

const Recipes = ({recipes}) => {
  if(!recipes){
    return (
      <div>
        <div className="recipe-header">
          <h2>Our Suggestions</h2>
          <p>Dont like what you see? No worries, search for what you want to cook with.</p>
        </div>
        < Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="recipe-header">
        <h2>Our Suggestions</h2>
        <p>Dont like what you see? No worries, search for what you want to cook with.</p>
      </div>
      <Recipe_Detail recipes={recipes} />
    </div>
  )
}

export default Recipes
