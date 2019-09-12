import React from 'react';
import '../containers/Contact.css';

const User = ({name, email, id, username}) => {
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5 contactcontainer">
            <img src={`https://robohash.org/${id}?100x100`} alt={name} />
            <div>
                <p>{name}</p>
                <h4>{username}</h4>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default User