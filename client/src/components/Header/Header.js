import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <div id="header-content">
                <div className="row">
                    <div className="col-4">
                        <h3>Dane's Random Meal Generator</h3>
                    </div>
                    <div className="col-4">
                        <img src="./images/eat.jpg" alt="eat it" id="eat" />
                    </div>
                    <div className="col-4">
                        <h5>MY SAVED MEALS</h5>
                    </div>
                </div>
                {/* <h3>Dane's Random Meal Generator</h3>
                <img src="./images/eat.jpg" alt="eat it" id="eat" /> */}
            </div>
        </div>
    )
}

export default Header;