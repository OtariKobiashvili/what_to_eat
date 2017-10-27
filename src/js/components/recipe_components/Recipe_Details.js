import React, { Component } from 'react';

const RecipeDetail = ({recipes}) => {

  console.log(recipes);
  return (
    <div>
      <h2>Todays Suggestions</h2>
      <div className="recipe">
      <img src={recipes.image} alt="Picture of recipe"/>
      <h2>{recipes.label}</h2>
      <h5>By: {recipes.source}</h5>
      <p>Servings: {recipes.yield}</p>
      <p>Calories per Serving: {Math.floor(recipes.calories/recipes.yield)}</p>
      <p>Fat per Serving: {Math.floor(recipes.totalNutrients.FAT.quantity/recipes.yield)}</p>
      <p>Carbs per Serving: {Math.floor(recipes.totalNutrients.CHOCDF.quantity/recipes.yield)}</p>
      <p>Protein per Serving: {Math.floor(recipes.totalNutrients.PROCNT.quantity/recipes.yield)}</p>
    </div>
    </div>
  )
}

export default RecipeDetail;
