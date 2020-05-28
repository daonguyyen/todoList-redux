var initialState = {
    sort : {
        by : 'name',
        value : 1
    }
}

var myReducer = (state = initialState, action) => {
    if(action.type === 'SORT'){
        var { by, value } = action.sort; //state sau khi cap nhat
        return { by, value };
    }
    return state;//Tra ve state moi
}

export default myReducer