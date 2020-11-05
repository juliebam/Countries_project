import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header.js';

import Search from './Search.js';

import Gallery from './Gallery.js';

import Filter from './Filter.js';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

componentDidMount() {
  const apiURL = "https://restcountries.eu/rest/v2/all";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      this.setState({ countries: data})
    })
}


  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <section className="search_filter">
            <Search />
            <Filter />
          </section>


          <Gallery countries={this.state.countries} />




        </main>
      </div>
    );
  }
}

export default App;
