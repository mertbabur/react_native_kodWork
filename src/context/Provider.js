import React from 'react';
import { Provider } from "react-redux";
import reducers from "./reducers";
import initialState from "./store";
import {createStore} from "redux";

const UserProvider = ({children}) => {
    const store = createStore(reducers, initialState);
    return <Provider store={store}>{children}</Provider>
}

export default UserProvider;