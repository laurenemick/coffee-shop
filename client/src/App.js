import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Link style={{color:"white"}} to="/">Menu</Link>
          <Link style={{color:"white"}} to="/cart">Cart</Link>

          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
  );
}

export default App;
