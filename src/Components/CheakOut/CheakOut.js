import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheakOut.css';

const CheakOut = () => {
const [ loggedIn ] = useContext(UserContext);
//console.log(loggedIn);

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
           
            <h2>Hello <span>{loggedIn?.name}</span> you have order: <span>{foodItem?.name}</span> <br/> 
            your iteam will cost <span>{foodItem?.price}</span>$</h2>
            
            <h1>Thank You Sir for visiting BURGER HOUSE</h1>
        </div>
    );
};

export default CheakOut;