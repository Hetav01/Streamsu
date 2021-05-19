const streamReducer = (start = {}, action) => {
    switch (action.type) {
        case "EDIT_STREAM": 
            return {...state, [action.payload.id] : action.payload};
        default:
            
    }
}