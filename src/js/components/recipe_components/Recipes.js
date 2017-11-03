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
          <hr/>
        </div>
        < Loader />
      </div>
    );
  }

  const recipeDetails = recipes.map((recipe) => {
    return (
      <Recipe_Detail
        recipes={recipe}
        key={recipe.uri}
      />
    )
  });

  return (
    <div>
      <div className="recipe-header">
        <h2>Our Suggestions</h2>
        <p>Dont like what you see? No worries, search for what you want to cook with.</p>
        <hr/>
      </div>
      <ul className="wrapper">
        {recipeDetails}
      </ul>
    </div>
  )
}

export default Recipes
