import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    };
};

export const signOut = () => {
    return { 
        type: "SIGN_OUT" 
    };
};

//we want to trigger the navigation from the create stream button only after we get a response from the API.

export const createStream = (formValues) => {   //we are creating a new stream using the input in /new.
    return async (dispatch, getState) => {
        const {userId} = getState().auth;   //check the redux dev tools, we just got the auth from the state object.
        const response = await streams.post("/streams", { ...formValues, userId });    //now we need to add the userId to the formValues object.
        dispatch({
            type: "CREATE_STREAM", 
            payload: response.data
        });
        history.push("/");
    };
};


export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({
            type: "FETCH_STREAM",
            payload: response.data
        });
    };
};

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get("/streams");

        dispatch({
            type: "FETCH_STREAMS",
            payload: response.data
        });
    }
};

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({
            type: "DELETE_STREAM",
            payload: id
        });
    }
};

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);

        dispatch({
            type: "EDIT_STREAM",
            payload: response.data
        });
    }
};