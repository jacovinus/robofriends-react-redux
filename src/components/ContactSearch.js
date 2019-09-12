import React from 'react';

const ContactSearch = ({searchField, searchChange}) =>{
    return(
<div className="pa2 tc">
<input
type="search"
className="pa3 ba b--blue bg-lightest-blue tc"
placeholder="search for contacts"
onChange={searchChange}
/>
</div>
    )

}
export default ContactSearch;