import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components
import Header from './components/header_components/Header';
import MoreInfo from './components/info_components/More_Info';
import RecipeDetail from './components/recipe_components/Recipe_Details';
// Import CSS
import '../css/main.css';

const APP_ID = '95c6c70e';
const APP_KEY = '6251e7d2e5ce82faf8f6a409b9e125e0';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        recipe: null
      }

      this.searchRecipes("random");
  }

  random() {
    return (Math.floor(Math.random()*10));
  }

  searchRecipes(ingredients){

    const URL = `https://api.edamam.com/search?q=${ingredients}`

    fetch(URL).then((resp) => resp.json())
    .then((data) => {
      console.log(data.hits[this.random()].recipe);
      this.setState({
        recipe: data.hits[this.random()].recipe,
      });
    });
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <MoreInfo />
          <RecipeDetail recipe={this.state.recipe} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

