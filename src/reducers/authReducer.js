const INITIAL_STATE = {     //capitalised declared variable means do not change the object anyhow.
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN" : 
            return { ...state, isSignedIn: true, userId: action.payload}
        case "SIGN_OUT" :
            return { ...state, isSignedIn: false, userId: null }    //here we set the value again to null as when we sign out we need to remove the id from the database.
        default :
            return state;
    }
};