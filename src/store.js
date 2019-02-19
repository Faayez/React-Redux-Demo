import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import draw from "../src/components/reducers/drawReducers"
import signIn from "../src/components/reducers/authReducers"

const reducer = combineReducers({
    draw,
    signIn
});
export default createStore(reducer, applyMiddleware(thunk));

