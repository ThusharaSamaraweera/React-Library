import React from 'react';
import './App.scss';
import Library from "./views/Library";
import {Provider} from "react-redux"
import { store } from './store/reducers/RootReducer';

const Client: React.FC =() => {
    return(
        <Provider store={store}>
            <Library/>
        </Provider>
    ) 
};

export default Client;