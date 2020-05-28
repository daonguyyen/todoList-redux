var initialState = false

var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state = !state;
        return state; //Tra ve state moi
    }
    
    return state;//Tra ve state moi
}

export default myReducer