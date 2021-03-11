import React from "react";
import { connect } from "react-redux";

import { removeFromCart, removeExtra } from "../actions/extraActions"
import AdditionalExtras from "./AdditionalExtras";

import CloseIcon from "@material-ui/icons/Close";
import { Icon } from "@material-ui/core";


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
                            {
                                item.extras.map(extra => (
                                    <div className="extra">
                                        <Icon onClick={() => props.removeExtra(item.id, extra)}>
                                            <CloseIcon fontSize="small" />
                                        </Icon>
                                        <p style={{paddingLeft:"4px"}}>{extra.name}</p>
                                    </div>
                                ))
                            }
                            <button onClick={() => {handleClick(item.id)}}>Remove</button>
                            <AdditionalExtras id={item.id} />
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
        removeFromCart: (id) => { dispatch(removeFromCart(id)) },
        removeExtra: (id, extra) => { dispatch(removeExtra(id, extra)) }
    };
};
  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Cart);