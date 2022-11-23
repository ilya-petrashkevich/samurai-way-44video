import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reduser";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    //это как бы сокращённая запись, а если раскомментить закомменченное ниже через двоеточие, то это как бы полная будет!!!
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer
})

let store: StoreType = createStore(reducers);

export default store;