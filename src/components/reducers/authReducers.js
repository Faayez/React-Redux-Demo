export default function signIn(state = {}, action) {

    switch (action.type) {
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                signInData: action.payload,
                status: 200
            }
            break;


        default:
            return state
    }
}