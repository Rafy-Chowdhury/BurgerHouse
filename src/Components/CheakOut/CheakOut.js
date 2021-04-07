import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CheakOut.css';

const CheakOut = () => {


const { name } = useParams()

const [foodOrders, setFoodOrders] = useState([]);
//console.log(foodOrders);

useEffect(() => {
    fetch(`https://sleepy-lowlands-20404.herokuapp.com/iteams`)
    .then(res => res.json())
    .then(data => setFoodOrders(data))
}, [name]);

const foodItem = foodOrders.find(food => food.name === name);

console.log(foodItem);




    return (
        <div className="foodCheak">
            <h1>Please Checkout your order</h1>
            <div className="foodName">
            <h3>Name of food: <span>{foodItem?.name}</span> </h3>
            <h3>Quantity of food: 1</h3>
            <h2>Price of Food: <span>{foodItem?.price}$</span> </h2>
            <Link className="orderProcess" to="/orders">Process Order</Link>
            </div>
            
            
           
        </div>
    );
};

export default CheakOut;