import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function iPhone() {
    return (
        <div>
            <nav className="sub-nav">
                <Link className="sublink" to="/macbook-air">Macbook Air</Link>
                <Link className="sublink" to="/macbook-pro">Macbook Pro</Link>
                <Link className="sublink" to="/imac">iMac</Link>
                <Link className="sublink" to="/imac-pro">iMac Pro</Link>
                <Link className="sublink" to="/mac-pro">Mac Pro</Link>
                <Link className="sublink" to="/macbook-air">Mac mini</Link>
            </nav>
            <h1>iPhones are WAY better than Android</h1>
        </div>
    )
}
export default iPhone;