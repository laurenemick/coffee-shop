import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link className="nav-link" to="/">Menu</Link>
            <Link className="nav-link" to="/cart">Cart</Link>
          </div>

          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
  );
}

export default App;
