import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { removeFromCart, removeExtra } from "../actions"
import Extras from "./Extras";

import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Icon } from "@material-ui/core";

const Cart = props => {

    const handleClick = index => {
        props.removeFromCart(index); 
    }

    return (
        <div className="cart">
            {
                props.addedItems.map((item, index) => (
                    <div className="item" key={uuidv4()}>
                        <div className="item-close">
                            <IconButton color="inherit" onClick={() => {handleClick(index)}} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <div className="item-container">
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
                                        <div className="added-extra" key={uuidv4()}>
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
                                <Extras index={index} />
                                {/* <div>
                                <div className="item-btn">
                                    <button className="btn" onClick={() => setOpen(true)}>
                                        Add Extras
                                    </button>
                                </div>

                                <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
                                    <div className="toolbar">
                                        <Toolbar style={{display:"flex", justifyContent:"flex-end"}}>
                                            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
                                                <CloseIcon style={{color:"#fdfafb"}}/>
                                            </IconButton>
                                        </Toolbar>
                                    </div>
                                    <Extras index={index} />

                                    <div className="update-btn">
                                        <button className="btn-2" onClick={() => setOpen(false)}>
                                        Update Item
                                        </button>
                                    </div>
                                </Dialog>
                                </div> */}
                            </div> {/* End of item-content */}
                        </div> {/* End of item-container */}
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