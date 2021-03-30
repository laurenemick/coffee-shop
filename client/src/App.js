import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./components/Menu";
import Cart from "./components/Cart";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/IconButton";
import LocalMallIcon from '@material-ui/icons/LocalMall';

import "./App.css";

/* 
  TO DO:
  - Advance extras (+/- for adjusting shots, diff sizes, add syrup flavors)
  - + to duplicate item in cart
  - Add search bar
  - Create backend? or integrate api
  - Breakdown reducer/action into more files 
*/

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#cdadb0',
    color: 'black',
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const App = props => {

  return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link className="logo" to="/">Café d'abord</Link>
            <Link className="cart-icon" to="/cart">
              <Icon aria-label="cart">
                <StyledBadge badgeContent={props.quantity} color="primary">
                  <LocalMallIcon fontSize="large" />
                </StyledBadge>
              </Icon>
            </Link>
          </div>

          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
  );
}

const mapStateToProps = state => {
  return {
    quantity: state.quantity
  };
};

export default connect(
  mapStateToProps
)(App);