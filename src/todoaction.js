import {
CHANGE_SRC_FIELD,
REQUEST_TODOS_PENDING,
REQUEST_TODOS_SUCCESS,
REQUEST_TODOS_FAILED
} from './todoconst';


export const setSrcField = (text) => ({
    type: CHANGE_SRC_FIELD,
    payload: text
});
// REQUES TYPES TO API

export const requestTodos = () => (dispatch) => {
    dispatch({type: REQUEST_TODOS_PENDING });
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then( response => response.json())
    .then( data => dispatch ({type : REQUEST_TODOS_SUCCESS, payload: data }))
    .catch( error => dispatch({ type : REQUEST_TODOS_FAILED, payload: error }))
}