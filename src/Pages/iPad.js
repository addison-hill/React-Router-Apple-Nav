import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function iPad() {
    return (
        <div>
            <nav className="sub-nav">
                <Link className="sublink" to="/ipad-pro">iPad Pro</Link>
                <Link className="sublink" to="/iPad-air">iPad Air</Link>
                <Link className="sublink" to="/ipad">iPad</Link>
                <Link className="sublink" to="/imac-mini">iPad mini</Link>
                <Link className="sublink" to="/apple-pencil">Apple Pencil</Link>
                <Link className="sublink" to="/accessories">Accesories</Link>
            </nav>
            <h1>iPads are COOL!</h1>
        </div>
    )
}
export default iPad;