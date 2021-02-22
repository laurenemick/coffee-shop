import React from "react";
import { connect } from "react-redux";

const Total = props => {
    return (
        <div>
            <h4>Total: ${props.coffee.price + props.additionalPrice}</h4>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        coffee: state.coffee,
        additionalPrice: state.additionalPrice
    };
};

export default connect(
    mapStateToProps, 
    { } 
)(Total);