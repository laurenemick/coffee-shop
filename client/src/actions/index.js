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

export const addExtra = (index, extra) => {
    return { type: ADD_EXTRA, index, extra};
};

export const removeExtra = (index, extraIndex, extra) => {
    return { type: REMOVE_EXTRA, index, extraIndex, extra};
};