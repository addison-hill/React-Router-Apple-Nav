import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function NavWrapper () {
    return (
        <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/mac">Mac</Link>
        <Link className="link" to="/ipad">iPad</Link>
        <Link className="link" to="/iphone">iPhone</Link>
        <Link className="link" to="/watch">Watch</Link>
        <Link className="link" to="/tv">TV</Link>
        <Link className="link" to="/music">Music</Link>
        <Link className="link" to="/support">Support</Link>
        <Link className="link" to="/search">Search</Link>
        <Link className="link" to="/cart">Cart</Link>
      </nav>
    )
}
export default NavWrapper;