import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './src/Store/configureStore';
import {name as appName} from './app.json';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('rncoursedoc', () => RNRedux);