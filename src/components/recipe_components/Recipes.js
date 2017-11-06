import React, { Component } from 'react';

import Loader from '../info_components/Loader';
import Recipe_Detail from './Recipe_Details'

const Recipes = ({recipes}) => {
  if(!recipes){
    return (
      <section>
        <div className="recipe-header">
          <h2>Loading some suggestions...</h2>
          <hr/>
        </div>
        < Loader />
      </section>
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
    <section>
      <div className="recipe-header">
        <h2>Our Suggestions</h2>
        <hr/>
      </div>
      <ul className="wrapper">
        {recipeDetails}
      </ul>
    </section>
  )
}

export default Recipes
