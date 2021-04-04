import React from 'react';
import { useHistory } from 'react-router';
import './Iteams.css';




const Iteams = (props) => {
    
   
    const {name, imageURL, price} = props.food;
   
    
    const history = useHistory();
    const BuyingFood = (name) => {
        history.push(`/cheakout/${name}`);
    }
    return (
       
         <div className="food">
            <img src={imageURL} alt=""/>
            <h2> {name} </h2>
            <p>price: {price}$</p>
            <button onClick={() => BuyingFood(name)}>Buy Now</button>
         </div>
        
    );
};

export default Iteams;