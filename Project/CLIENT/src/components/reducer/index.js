import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer"
import NavigationReducer from "./NavigationReducer";

export default combineReducers({
    AuthenticationReducer: AuthenticationReducer,
    NavigationReducer: NavigationReducer
});