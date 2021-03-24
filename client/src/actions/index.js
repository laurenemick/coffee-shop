export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_EXTRA = "ADD_EXTRA";
export const REMOVE_EXTRA = "REMOVE_EXTRA";

export const addToCart = id => {
    return { type: ADD_ITEM, id};
};

export const removeFromCart = index => {
    return { type: REMOVE_ITEM, index};
};

export const addExtra = (id, extra) => {
    return { type: ADD_EXTRA, id, extra};
};

export const removeExtra = (id, extra) => {
    return { type: REMOVE_EXTRA, id, extra};
};