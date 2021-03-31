// import axios from "axios";

export const REQUEST_COFFEE_DATA = "REQUEST_COFFEE_DATA";
export const RECEIVE_COFFEE_DATA = "RECEIVE_COFFEE_DATA";
export const SEARCH = "SEARCH";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_EXTRA = "ADD_EXTRA";
export const REMOVE_EXTRA = "REMOVE_EXTRA";

export const addCoffees = coffees => async dispatch => {
    dispatch({
        type: "REQUEST_COFFEE_DATA"
    });
    try {
        // const json = await axios.get(url); // if I decide to use api
        dispatch({
            type: "RECEIVE_COFFEE_DATA",
            // coffees: json.data,
            coffees: coffees,
            isError: false,
            errorMsg: ""
        });
    } catch (e) {
        dispatch({
            type: "RECEIVE_COFFEE_DATA",
            coffees: [],
            isError: true,
            errorMsg: e
        });
    }
};

export const search = value => {
    return { type: SEARCH, value};
};

export const addToCart = id => {
    return { type: ADD_ITEM, id};
};

export const removeFromCart = index => {
    return { type: REMOVE_ITEM, index};
};

export const addExtra = (index, extra) => {
    return { type: ADD_EXTRA, index, extra};
};

export const removeExtra = (index, extraIndex, extra) => {
    return { type: REMOVE_EXTRA, index, extraIndex, extra};
};