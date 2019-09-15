import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import SrcBox from '../components/SrcBox';
import Scrolltodo from '../components/Scrolltodo'
import ErrorBoundry from '../components/ErrorBoundry';

import './Todos.css';

import { setSrcField, requestTodos } from '../todoaction';

const mapStateToPropsTodos = state => {
    return {
        searchField: state.searchTodos.searchField,
        todos: state.requestTodos.todos,
        isPending: state.requestTodos.isPending,
        error: state.requestTodos.error
    }
}

const mapDispatchToPropsTodos = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSrcField(event.target.value)),
        onRequestTodos: () => dispatch(requestTodos())
    }
}

class Todos extends Component{
    componentDidMount() {
        this.props.onRequestTodos();
    }
    render() {
        const { searchField, onSearchChange, todos, isPending } = this.props;
        const filteredTodos = todos.filter( todo => {
            return todo.title.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? <div><h2>Loading todos...</h2></div> :
        (
            <div>
                <SrcBox searchChange={onSearchChange} />
                <Scrolltodo>
                <ErrorBoundry>
                    <TodoList todos={filteredTodos} />
                </ErrorBoundry>
                </Scrolltodo>
            </div>
        );
    }
}

export default connect(mapStateToPropsTodos, mapDispatchToPropsTodos)(Todos);