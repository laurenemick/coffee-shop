import React from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./components/Menu";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/IconButton";
import LocalMallIcon from '@material-ui/icons/LocalMall';

import "./App.css";

/* 
  TO DO:
  - Advance extras (+/- for adjusting shots, diff sizes, add syrup flavors)
  - + to duplicate item in cart
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
  const locationObj = useLocation()

  return (
      <>
        <div className="App">
          <div className="nav">
            <div className="nav-left">
              <Link className="logo" to="/">Café d'abord</Link>
              {locationObj.pathname === '/' ? <SearchBar /> : null}
            </div>
            <Link className="cart-icon" to="/cart">
              <Icon aria-label="cart">
                <StyledBadge badgeContent={props.quantity} color="primary">
                  <LocalMallIcon fontSize="large" />
                </StyledBadge>
              </Icon>
            </Link>
          </div>
          
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </>
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