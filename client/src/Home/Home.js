import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {
        recipe: null
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ recipe: data });
            }
            )
    };

    render() {
        return(
            <div>
                <div id="meal-search-content">
                    <h2>Welcome to the random meal generator</h2>
                    <p>Have a hungry family to feed but don't know what to make for dinner?</p>
                    <p>Simply give our random meal generator button a click and prepare to be inspired!</p>
                </div>
            </div>
        )
    }
}

export default Home;