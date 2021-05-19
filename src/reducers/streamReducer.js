import _ from "lodash";

export default (state = {}, action) => {
    switch(action.type) {
        case "FETCH_STREAMS":
            return { ...state, ..._.mapKeys(action.payload, "id") };
        case "FETCH_STREAM":
            return {...state, [action.payload.id]: action.payload};
        case "CREATE_STREAM":
            return {...state, [action.payload.id]: action.payload};     //here we are basically taking the state payload and assigning the new key value pair to the state object.
        case "EDIT_STREAM": 
            return {...state, [action.payload.id]: action.payload};
        case "DELETE_STREAM":
            return _.omit(state, action.payload);   //here we don't need to do payload.id as the payload itself is the id.
        default: 
            return state;
        
    }
}