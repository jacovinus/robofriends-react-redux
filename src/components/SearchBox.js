import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className="pa2 tc">
            <input 
            type="search" 
            className="pa3 ba b--green bg-lightest-blue tc"
            placeholder="Search for robots"
            onChange={searchChange}
            />

        </div>
        
    )
}

export default SearchBox;