import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";
import AdditionalExtras from "./components/AdditionalExtras";
import Total from "./components/Total";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Link style={{color:"white"}} to="/">Menu</Link>
          <Link style={{color:"white"}} to="/cart">Cart</Link>

          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/item/:itemid" component={MenuItem} />
        </div>
      </Router>
  );
}

export default App;
