import React from 'react';
import './Scroll.css';
const Scroll = (props) => {
    return (
        <div style={{border: '3px solid black', height: '600px', overflowY:'auto'}}>
        {props.children}
        </div>
    );
}
export default Scroll;
