const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "INCRBYFIVE": return state + 5;
        default: return state;
    }
}
export  default changeTheNumber