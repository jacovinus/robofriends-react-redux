import React from 'react';
import '../containers/Todos.css';

const Todo =({ userId, id, title, completed }) => {
    return(
        <div className="bg-gold tc dib br3 pa3 ma2 grow bw2 shadow-5 fl w-100">
            <p>Id: {id}</p>
            <p> User Id: {userId}</p>
            <h4>{title}</h4>
            <p> {completed} </p>

        </div>
    )
}
export default Todo;