import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
import navbarReducer from './navbarReducer';
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;