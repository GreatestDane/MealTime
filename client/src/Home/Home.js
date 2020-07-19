import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {
        recipe: null,
        mealName: null,
        ingredients: [],
        mealimage: "/images/black.jpg"
    }

    //Fetch data from meal API to set to state when button is clicked
    fetchMeal() {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            //Create array of ingredients to set to state
            let ingredientsArray = [];
            for (let i = 1;  i < 20; i++) {
                if (data.meals[0][`strIngredient${i}`] === "") {
                    console.log("empty string");
                }
                else {
                    ingredientsArray.push(data.meals[0][`strIngredient${i}`]);
                }

            }

            console.log(ingredientsArray);

            this.setState({ 
                recipe: data.meals[0],
                mealName: data.meals[0].strMeal,
                ingredients: ingredientsArray,
                mealimage: data.meals[0].strMealThumb
            });
            console.log(this.state.recipe);
            console.log(this.state.recipe.strMeal);
            console.log(this.state.mealName);
        }
        )
    }
    //end fetch

    //Map element to render ingredients
    renderIngredients = () => {
        const ingredients = this.state.ingredients.map((element, i) => {
            return (
                <li key={i}>
                    {element}
                </li>
            )
        })
        return ingredients;
    }
    //End ingredient map

    render() {
        return (
            <div>
                <div className="flex-container">
                    <div id="meal-search-content">
                        <h2>Welcome to the random meal generator</h2>
                        <p>Have a hungry family to feed but don't know what to make for dinner?</p>
                        <p>Simply give our random meal generator button a click and prepare to be inspired!</p>
                        <button className="btn btn-danger btn-lg" onClick={() => this.fetchMeal()}>Get my meal</button>
                    </div>
                    <div id="meal-search-result">
                        <h2>{this.state.mealName}</h2>
                        <img src={this.state.mealimage} alt="meal" />
                        <ol>
                            {this.renderIngredients()}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;