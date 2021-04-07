import React, { useContext }from 'react';
import { UserContext } from '../../App';
import './OrdersItem.css';


const OrdersItem = () => {
    

    const [ loggedIn ] = useContext(UserContext);
    return (
        <div className="confirmText">

            <h1>Hello <span>{loggedIn?.name}</span>, <br/> 
            We have received your request... <br/>
            Thank you for your Order.</h1>
        </div>
    );
};

export default OrdersItem;