import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {
        recipe: null,
        mealName: null,
        ingredients: [],
        mealimage: "/images/black.jpg"
    }

    // componentDidMount() {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({ 
    //                 recipe: data.meals[0],
    //                 mealName: data.meals[0].strMeal,
    //                 mealimage: data.meals[0].strMealThumb
    //             });

    //             let ingredients = []
    //             console.log(this.state.recipe);
    //             console.log(this.state.recipe.strMeal);
    //             console.log(this.state.mealName);
    //         }
    //         )
    // };

    fetchMeal() {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                recipe: data.meals[0],
                mealName: data.meals[0].strMeal,
                mealimage: data.meals[0].strMealThumb
            });
            console.log(this.state.recipe);
            console.log(this.state.recipe.strMeal);
            console.log(this.state.mealName);
        }
        )
    }

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
                        <img src={this.state.mealimage} alt="meal image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;