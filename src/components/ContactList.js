import React from 'react';
import User from './User';
const ContactList = ({ contacts }) => {
    const contactComponent  = contacts.map((user, i) => {
        return(
            <User 
            key={i}
            id={contacts[i].id}
            name={contacts[i].name}
            username={contacts[i].username}
            email={contacts[i].email} />

        )
    });
    return (
        <div>
            {contactComponent}
        </div>
    );
}
export default ContactList;