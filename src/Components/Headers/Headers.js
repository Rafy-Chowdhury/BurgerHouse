import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
    return (
        <div>
      <nav className="navbar">
        <ul className ="navItem">
          <li>
            <Link className="link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="link" to="/orders">Orders</Link>
          </li>
          <li>
            <Link className="link" to="/admin">Admin</Link>
          </li>
          <li>
            <Link className="link" to="/deals">Deals</Link>
          </li>
          <li>
            <Link className="link" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default Headers;