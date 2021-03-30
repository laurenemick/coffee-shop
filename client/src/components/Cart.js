import React from "react";
import { connect } from "react-redux";

import { removeFromCart, removeExtra } from "../actions"
import Extras from "./Extras";

import CloseIcon from "@material-ui/icons/Close";
import { Icon } from "@material-ui/core";

const Cart = props => {

    const handleClick = index => {
        props.removeFromCart(index); 
    }

    return (
        <div className="cart">
            {
                props.addedItems.map((item, index) => (
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
                                item.extras.map((extra, extraIndex) => (
                                    <div className="added-extra">
                                        <div className="extra">
                                            <Icon onClick={() => props.removeExtra(index, extraIndex, extra)}>
                                                <CloseIcon fontSize="small" />
                                            </Icon>
                                            <p style={{paddingLeft:"4px"}}>{extra.name}</p>
                                        </div>
                                        <div>
                                            <p>+${extra.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="item-btn">
                                <button className="btn" onClick={() => {handleClick(index)}}>Remove</button>
                            </div>
                
                            <Extras index={index} />
                        </div>
                    </div>
                ))
            }
            <h4 className="total">Total: ${props.total.toFixed(2)}</h4>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        addedItems: state.addedItems,
        total: state.total,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (index) => { dispatch(removeFromCart(index)) },
        removeExtra: (index, extraIndex, extra) => { dispatch(removeExtra(index, extraIndex, extra)) },
    };
};
  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Cart);