import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/extraActions"

const Menu = props => {

    const handleClick = id => {
        props.addToCart(id); 
    }

    return (
        <div className="menu-items">
            {
                props.coffees.map(item => (
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
                            <button onClick={()=>{handleClick(item.id)}}>Add</button>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

const mapStateToProps = state => {
    return {
      coffees: state.coffees,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => { dispatch(addToCart(id)) }
    };
};
  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Menu);