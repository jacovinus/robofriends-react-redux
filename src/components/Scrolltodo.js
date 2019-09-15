import React from 'react';

const Scrolltodo = (props) =>{
    return (
        <div style={{border: '3px solid lightblue', height: '600px', overflow:'auto'}}>
            {props.children}
        </div>
    )
}
export default Scrolltodo;
