import React from 'react';
import { NavLink } from 'react-router-dom';
import './Food.css'
const Fooditems = () => {
    return (
        <div className="menubar">
            <nav>
                <NavLink to="/breakfast"> BreakFast</NavLink>
                <NavLink to="/lunch"> Lunch</NavLink>
                <NavLink to="/dinner">Dinner</NavLink>

            </nav>

        </div>

    );
};

export default Fooditems;