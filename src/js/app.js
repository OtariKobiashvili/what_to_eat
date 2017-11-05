import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components
import Header from './components/header_components/Header';
import MoreInfo from './components/info_components/More_Info';
import Recipes from './components/recipe_components/Recipes';
// Import CSS
import '../css/main.css';

const APP_ID = '95c6c70e';
const APP_KEY = '6251e7d2e5ce82faf8f6a409b9e125e0';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        recipes: null
      }

      this.searchRecipes();
  }

  searchRecipes(ingredients){
    console.log("hello world");

    let random = () => {
      return (Math.floor(Math.random()*100));
    };

    const URL = `https://api.edamam.com/search?q=${ingredients}&from=0&to=100`

    fetch(URL).then((resp) => resp.json())
    .then((data) => {
      let recipes = [];

      for(let i = 0; i < 6; i++) {
        recipes.push(data.hits[random() + i].recipe);
      }
      console.log(recipes);
      this.setState({
        recipes: recipes,
      });
    });
  }


  render() {


    return (
      <div>
        <Header newSearch={this.searchRecipes}/>
        <div className="container">
          <MoreInfo />
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

