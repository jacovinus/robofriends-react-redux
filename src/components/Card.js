import React from 'react';
import '../containers/App.css';


const Card = ({name, email, id, username}) => {
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt={name} />
            <div>
                <h3>{name}</h3>
                <h4><strong>{username}</strong></h4>
                <p> {email} </p>

            </div>
        </div>
    );
}
export default Card;