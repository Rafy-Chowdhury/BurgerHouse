import React, { useEffect, useState } from 'react';
import Iteams from '../Iteams/Iteams';
import Headers from '../Headers/Headers';
import './Home.css';

const Home = () => {
    const [newFood, setNewFood] = useState([]);

    useEffect(() => {
        fetch(`https://sleepy-lowlands-20404.herokuapp.com/iteams`)
        .then(res => res.json())
        .then(data => setNewFood(data))
    }, [])
   
    return (
        <div>
            <Headers />
            <div className="first-page">
            <h1 className="header">Welcome to <br/> BURGER HOUSE</h1>
            <div className="spinner">
            {
                    newFood.length === 0 && <h3>loading...please wait </h3>
            }
            </div>
           
            <div className="home">
              
            {
                newFood.map(food => <Iteams key={food._id} food={food}></Iteams>)
            }
            </div>
           
            </div>
         
            
        </div>
    );
};

export default Home;