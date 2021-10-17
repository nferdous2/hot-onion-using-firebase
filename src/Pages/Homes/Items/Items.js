
import React from 'react';
import './Items.css'
const Items = ({ item }) => {
    const { name, details, price, img } = item || {};

    return (
        <div>
            <div className="food-item">
                <div className="card">
                    <img className="card-img-top p-3 rounded-circle" roundedCircle src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card.ttile">{name}</h5>
                        <p>{details}</p>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;