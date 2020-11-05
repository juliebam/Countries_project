import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Filter extends Component {
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter by Region
</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}

export default Filter;