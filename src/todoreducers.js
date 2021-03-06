import {
    CHANGE_SRC_FIELD,
    REQUEST_TODOS_PENDING,
    REQUEST_TODOS_SUCCESS,
    REQUEST_TODOS_FAILED
    } from './todoconst';

const initialStateSrc = {
        searchField : ''
    }

export const searchTodos = (state=initialStateSrc, action={}) => {
    switch(action.type) {
        case CHANGE_SRC_FIELD:
            return Object.assign({},state, {searchField:action.payload});
            default:
                return state;
            }
        }

const initialStateTodos = {
        isPending: false,
        todos: [],
        error: ''
    }

export const requestTodos = (state=initialStateTodos, action={}) => {
        switch(action.type) {
            case REQUEST_TODOS_PENDING:
                return Object.assign({},state, {isPending: true});
            case REQUEST_TODOS_SUCCESS:
                return Object.assign({},state, {todos: action.payload, isPending:false});
            case REQUEST_TODOS_FAILED: 
                return Object.assign({},state, {error : action.payload, isPending: false});
            default:
                return state;
        }

    }