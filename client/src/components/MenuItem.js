import React from "react";
import { connect } from "react-redux";
import AddedExtras from "./AddedExtras";

const MenuItem = props => {
    return (
      <div>
        {/* <div className="img-container" >
          <img className="item-img" src={props.coffee.image} alt={props.coffee.name} />
        </div>
        <div className="item-content">
          <div className="item-header">
            <h4>{props.coffee.name}</h4>
            <h4>${props.coffee.price}</h4>
          </div>
          <p>{props.coffee.size}</p>
          <p>{props.coffee.shots}</p>
          <p>{props.coffee.calories}</p>
          <AddedExtras />
        </div> */}
      </div>
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