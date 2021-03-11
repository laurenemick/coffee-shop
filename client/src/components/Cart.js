import React from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../actions/extraActions"

const Cart = props => {

    const handleClick = id => {
        props.removeFromCart(id); 
    }

    return (
        <div className="cart">
            {
                props.addedItems.map(item => (
                    <div className="item" key={item.id}>
                        <div className="img-container" >
                            <img className="item-img" src={item.image} alt={item.name} />
                        </div>
                        <div className="item-content">
                            <div className="item-header">
                                <h4>{item.name}</h4>
                                <h4>${item.price}</h4>
                            </div>
                            <p>{item.size}</p>
                            <p>{item.shots}</p>
                            <p>{item.calories}</p>
                            <button onClick={()=>{handleClick(item.id)}}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        addedItems: state.addedItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (id) => { dispatch(removeFromCart(id)) }
    };
};
  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Cart);