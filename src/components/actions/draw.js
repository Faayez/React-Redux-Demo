export const draw = (data) => {

    return dispatch => {
        dispatch({
            type: "draw",
            payload: data
        })
    }
}