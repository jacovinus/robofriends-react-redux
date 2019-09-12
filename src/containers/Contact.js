import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactSearch from '../components/ContactSearch';
import ScrollContact from '../components/ScrollContact';
import './Contact.css';


class Contact extends Component {
    //CONSTRUCTOR
    constructor() {
        super()
        this.state = {
            contacts : [],
            searchField : ''
        }
    } 
//COMPONENT DID MOUNT
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            return res.json();
        })
        .then((users)=>{
            this.setState({contacts : users});
        });
    }
//ON SEARCH CHANGE
    onSearchChange = (event) => {
      
    this.setState({ searchField: event.target.value });
    }
// RENDER
    render() {
        const {contacts, searchField } = this.state;
        const filteredContacts = contacts.filter(contact =>{
            return contact.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !contacts.length ? <div><h2>Buscando contactos</h2></div> :
        (
            <div>
            <ContactSearch>
                <ScrollContact>
                    <ContactList contacts={filteredContacts} />
                </ScrollContact>
            </ContactSearch>
            </div>
        );
    }
}
export default Contact;