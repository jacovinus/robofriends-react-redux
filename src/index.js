import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons';
import App from './containers/App';
import Todos from './containers/Todos';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import { searchTodos, requestTodos } from './todoreducers';
//const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const todoReducer = combineReducers({searchTodos, requestTodos});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const todosStore = createStore (todoReducer, applyMiddleware(thunkMiddleware));

// Robots
ReactDOM.render(
<Provider store={store} >
<App />
</Provider>, document.getElementById('root'));

// Todos
ReactDOM.render(
    <Provider store={ todosStore } >
        <Todos/>
    </Provider>, document.getElementById('todos')
);
serviceWorker.unregister();
