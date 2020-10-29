import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {

    render() {
        return(
            <form className="Search" >
                <FontAwesomeIcon icon={faSearch} />
                <input className="Search-input" type="text" id="search" placeholder="Search for country"  /> 
            </form>


        )
    }
}

export default Search;
