export const signIn = (data) => {

    return dispatch => {
        dispatch({
            type: "SIGNIN_SUCCESS",
            payload: data
        })
    }
}