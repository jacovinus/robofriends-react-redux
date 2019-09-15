import React from 'react';

const SrcBox = ({searchField, searchChange }) => {
    return(
        <div className="pa2 tc">
<input
type="search"
className="pa3 ba b--gold bg-orange tc"
placeholder="Search for todos"
onChange={searchChange}
/>
        </div>
    )
}
export default SrcBox;