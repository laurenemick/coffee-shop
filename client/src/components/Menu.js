import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, addCoffees } from "../actions";
import coffeeData from "../coffeeData.json"

// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import { IconButton } from "@material-ui/core";

const Menu = () => {
    const dispatch = useDispatch();
    const { coffees, isError, isLoading, errorMsg } = useSelector(
        state => state
    );

    const handleClick = id => {
        dispatch(addToCart(id)); 
    }

    // load json data in app state
    useEffect(() => {
        dispatch(addCoffees(coffeeData));
    }, []);

    return (
        <div className="menu-items">
            {isLoading && <div>Data loading...</div>}
            {isError && <div>Error loading data: {errorMsg}</div>}
            {!isLoading && !isError && (
                coffees.map(item => (
                    <div className="item item-container" style={{paddingTop:"4%"}} key={item.id}>
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
                            {item.calories !== "none" ? (
                                <p>{item.calories}</p>
                            ) : (
                                <p />
                            )}
                            <div className="item-btn">
                                <button className="btn" onClick={() => {handleClick(item.id)}}>Add</button>
                                {/* <IconButton onClick={() => {handleClick(item.id)}}>
                                    <AddCircleOutlineIcon fontSize="large" />
                                </IconButton> */}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
 
export default Menu;