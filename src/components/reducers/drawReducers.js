export default function draw(state = {}, action) {

    switch (action.type) {
        case "draw":
            console.log("state signup success ")
            return {
                ...state,
                data: action.payload,
                status: 200
            }
            break;


        default:
            return state
    }
}