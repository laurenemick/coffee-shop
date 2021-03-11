export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_EXTRA = "ADD_EXTRA";
export const REMOVE_EXTRA = "REMOVE_EXTRA";

export const addToCart = id => {
    return { type: ADD_ITEM, id};
};

export const removeFromCart = id => {
    return { type: REMOVE_ITEM, id};
};

export const addExtra = extra => {
    return { type: ADD_EXTRA, payload: extra};
};

export const removeExtra = extra => {
    return { type: REMOVE_EXTRA, payload: extra};
};