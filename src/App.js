import React, { useState } from 'react';
import './App.css';
import { Route, } from "react-router-dom";
import NavWrapper from "./NavWrapper";
import Home from "./Pages/Home";
import Mac from "./Pages/Mac";
import iPad from "./Pages/iPad";
import iPhone from "./Pages/iPhone";
import Watch from "./Pages/Watch";
import TV from "./Pages/TV";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";

function App() {
  const [itemURL] = useState("/");
  console.log(itemURL);
  return (
    <div className="App">
      <NavWrapper />
      <Route exact path="/" component={Home} />
      <Route exact path="/mac" component={Mac} />
      <Route exact path="/ipad" component={iPad} />
      <Route exact path="/iphone" component={iPhone} />
      <Route exact path="/watch" component={Watch} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/cart" component={Cart} />

    </div>
  );
}

export default App;
