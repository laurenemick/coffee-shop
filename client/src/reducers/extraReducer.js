import { ADD_EXTRA, REMOVE_EXTRA } from "../actions/extraActions";

export const initialState = {
    additionalPrice: 0,
    coffee: {
        price: 4.45,
        name: 'Iced Cafe Latte',
        size: 'Grande 16 fl oz',
        shots: '2 Shots',
        calories: '190 Calories',
        image:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        extras: []
    },
    additionalExtras: [
        { id: 1, name: 'Shot', price: 1.00 },
        { id: 2, name: 'Syrup', price: .50 },
        { id: 3, name: 'Specialty Milk', price: .80 }
    ]
  };

export const extraReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_EXTRA:
            return {
                ...state,
                coffee: {
                    ...state.coffee,
                    extras: [
                        ...state.coffee.extras, 
                        action.payload
                    ],
                    price: state.coffee.price + action.payload.price
                },
            };
        case REMOVE_EXTRA:
            return {
                ...state,
                coffee: {
                    ...state.coffee,
                    extras: [...state.coffee.extras.filter(extra => extra !== action.payload)],
                    price: state.coffee.price - action.payload.price
                },
            };
        default:
            return state;
    }
};