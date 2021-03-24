import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM, REMOVE_ITEM, ADD_EXTRA, REMOVE_EXTRA } from "../actions";

export const initialState = {
    additionalPrice: 0,
    coffees: [
        {
            id: 1,
            price: 4.45,
            name: 'Iced Cafe Latte',
            size: 'Grande 16 fl oz',
            shots: '2 Shots',
            calories: '190 Calories',
            image:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            extras: []
        },
        {
            id: 2,
            price: 4.45,
            name: 'Cafe Latte',
            size: 'Grande 16 fl oz',
            shots: '2 Shots',
            calories: '190 Calories',
            image:'https://cdn.pixabay.com/photo/2021/02/03/12/00/coffee-5977682_1280.jpg',
            extras: []
        },
    ],
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
        case ADD_ITEM:
            const addedItem = state.coffees.find(item => item.id === action.id)
            const billAfterAdd = state.total + addedItem.price

            addedItem.id = uuidv4

            return {
                ...state,
                addedItems: [
                    ...state.addedItems,
                    addedItem
                ],
                total: billAfterAdd,
                quantity: state.quantity += 1
            };

        case REMOVE_ITEM:
            const removedItem = state.addedItems[action.index]
            const newAddedItems = state.addedItems.splice(action.index, 1)
            const billAfterRemove = state.total - removedItem.price

            return {
                ...state,
                addedItems: newAddedItems,
                total: billAfterRemove,
                quantity: state.quantity -= 1
            };

        case ADD_EXTRA:
            let addIndex = state.addedItems.findIndex(item => item.id === action.id)
            const updated = [...state.addedItems]

            updated[addIndex].extras.push(action.extra) 

            // const updated = state.addedItems.splice(action.index, 1, selectedItem)
            // console.log("copy:", copy, "selected:", selectedItem)

            const billAfterAddExtra = state.total + action.extra.price
    
            return {
                ...state,
                addedItems: updated,
                total: billAfterAddExtra
            };

        case REMOVE_EXTRA:
            // find index of coffee item we want to remove extra from
            const removeIndex = state.addedItems.findIndex(item => item.id === action.id)
            const updatedArray = [...state.addedItems]

            // remove extra from extras array and decrement price 
            updatedArray[removeIndex].extras.pop(action.extra)
            const billAfterRemoveExtra = state.total - action.extra.price
    
            return {
                ...state,
                addedItems: updatedArray,
                total: billAfterRemoveExtra
            };

        default:
            return state;
    }
};