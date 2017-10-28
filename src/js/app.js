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

  random() {
    return (Math.floor(Math.random()*50));
  }

  searchRecipes(ingredients){

    const URL = `https://api.edamam.com/search?q=${ingredients}&from=0&to=50`

    fetch(URL).then((resp) => resp.json())
    .then((data) => {
      let recipe = data.hits[this.random()].recipe;
      this.setState({
        recipes: recipe,
      });
    });
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <MoreInfo />
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

