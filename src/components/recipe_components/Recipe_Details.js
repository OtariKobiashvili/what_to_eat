import React, { Component } from 'react';

const RecipeDetail = ({recipes}) => {
  return (
      <li className="recipe" style={{backgroundImage: `url(${recipes.image})`}}>
        <a href={recipes.url} target="_blank">
          <div className="recipe-overlay"></div>
          <div className="recipe-detail">
            <h2>{recipes.label}</h2>
            <h5>By: {recipes.source}</h5>
            {/* <p>Servings: {recipes.yield}</p>
            <p>Calories per Serving: {Math.floor(recipes.calories/recipes.yield)}</p>
            <p>Fat per Serving: {Math.floor(recipes.totalNutrients.FAT.quantity/recipes.yield)}</p>
            <p>Carbs per Serving: {Math.floor(recipes.totalNutrients.CHOCDF.quantity/recipes.yield)}</p>
            <p>Protein per Serving: {Math.floor(recipes.totalNutrients.PROCNT.quantity/recipes.yield)}</p> */}
          </div>
        </a>
      </li>
  )
}

export default RecipeDetail;
