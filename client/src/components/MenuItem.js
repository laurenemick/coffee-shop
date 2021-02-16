import React from "react";
import { connect } from "react-redux";

const MenuItem = props => {
    return (
        <>
            <img src={props.coffee.image} alt={props.coffee.name} width="300px" height="300px" />
            <h2>{props.coffee.name}</h2>
            <p>{props.coffee.size}</p>
            <p>{props.coffee.shots}</p>
            <p>{props.coffee.calories}</p>
            <p>${props.coffee.price}</p>
        </>
    );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    coffee: state.coffee,
  };
};

export default connect(
  mapStateToProps, 
  { } // action creators 
)(MenuItem);