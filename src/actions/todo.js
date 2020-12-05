const ADD = "ADD_ITEM";
const REMOVE = "REMOVE_ITEM";

export const addItem = (x) => ({
    type: ADD,
    data: {
        id: Math.random(),
        value: x
    } 
})

export const removeItem = (id) => ({
    type: REMOVE,
    id
})