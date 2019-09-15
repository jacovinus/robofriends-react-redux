import React from 'react';
import Todo from './Todo';
const TodoList = ({ todos }) => {
    const todoComponent = todos.map((title, i) => {
        return (
            <Todo
            key={i}
            id={todos[i].id}
            userId={todos[i].userId}
            title={todos[i].title}
            completed={todos[i].completed} />
        )
    });
    return (
        <div>
            {todoComponent}
        </div>
    )
}
export default TodoList;