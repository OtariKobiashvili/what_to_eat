import React, { Component } from 'react';

import Loader from '../info_components/Loader';

const RecipeDetail = ({recipe}) => {
  if(!recipe){
    return (
      < Loader />
    );
  }

  return (
    <div className="recipe">
      <img src={recipe.image} alt="Picture of recipe"/>
    </div>
  )
}

export default RecipeDetail;
