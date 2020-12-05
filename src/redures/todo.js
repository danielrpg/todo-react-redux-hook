const dataInitial = [];

const todo = (state=dataInitial, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.data];
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

export default todo;
