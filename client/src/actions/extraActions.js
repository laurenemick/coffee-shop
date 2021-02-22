export const ADD_EXTRA = "ADD_EXTRA";
export const REMOVE_EXTRA = "REMOVE_EXTRA";

export const addExtra = extra => {
    return { type: ADD_EXTRA, payload: extra};
};

export const removeExtra = extra => {
    return { type: REMOVE_EXTRA, payload: extra};
};