import { REQUEST_COFFEE_DATA, RECEIVE_COFFEE_DATA, SEARCH, ADD_ITEM, REMOVE_ITEM, ADD_EXTRA, REMOVE_EXTRA } from "../actions";

export const initialState = {
    coffees: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    search: [],
    additionalExtras: [
        { id: 1, name: 'Shot', price: 1.00 },
        { id: 2, name: 'Syrup', price: .50 },
        { id: 3, name: 'Specialty Milk', price: .80 }
    ],
    addedItems: [],
    total: 0,
    quantity: 0
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_COFFEE_DATA:
            return {
              ...state,
              isLoading: true,
              isError: false,
              errorMsg: ""
            };

        case RECEIVE_COFFEE_DATA:
            return {
                ...state,
                coffees: action.coffees,
                copy: action.coffees,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg
            };

        case SEARCH:
            const filtered = state.copy.filter(coffee => {
                return coffee.name.toLowerCase().includes(action.value.toLowerCase())
            })

            return {
                ...state, 
                coffees: filtered
            };
        
        case ADD_ITEM:
            const addedItem = state.coffees.find(item => item.id === action.id)
            const billAfterAdd = state.total + addedItem.price

            return {
                ...state,
                addedItems: [
                    ...state.addedItems,
                    addedItem,
                ],
                total: billAfterAdd,
                quantity: state.quantity += 1
            };

        case REMOVE_ITEM:
            const removedItem = state.addedItems[action.index]
            state.addedItems.splice(action.index, 1)

            const billAfterRemove = state.total - (removedItem.price + removedItem.extrasPrice)

            return {
                ...state,
                total: billAfterRemove,
                quantity: state.quantity -= 1
            };

        case ADD_EXTRA:
            const addExtraUpdatedList = state.addedItems.map((item, i) => {
                if (i === action.index) {
                    return {
                        ...state.addedItems[i],
                        extras: [...state.addedItems[i].extras, action.extra],
                        extrasPrice: state.addedItems[i].extrasPrice + action.extra.price
                    }
                } else {
                    return item
                }
            })
            const totalAfterAddExtra = state.total + action.extra.price
    
            return {
                ...state,
                addedItems: [...addExtraUpdatedList],
                total: totalAfterAddExtra
            };

        case REMOVE_EXTRA:
            const targetItem = state.addedItems[action.index]
            const updatedExtrasArray = targetItem.extras.filter((extra,exIndex) => exIndex !== action.extraIndex)

            const removeExtraUpdatedList = state.addedItems.map((item, i) => {
                if (i === action.index) {
                    return {
                        ...state.addedItems[i],
                        extras: [...updatedExtrasArray],
                        extrasPrice: state.addedItems[i].extrasPrice - action.extra.price
                    }
                } else {
                    return item
                }
            })
            const totalAfterRemoveExtra = state.total - action.extra.price
    
            return {
                ...state,
                addedItems: [...removeExtraUpdatedList],
                total: totalAfterRemoveExtra
            };

        default:
            return state;
    }
};
