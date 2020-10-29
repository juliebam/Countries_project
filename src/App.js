import React, { Component } from 'react';

import Header from './Header.js';

import Search from './Search.js';

import Gallery from './Gallery.js';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

//this gets all the data out of the API but what we need is the gallery to display - each country with 
// 1. flag
// 2. Country name
// 3. population
// 4. Region
// 5. Capital


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
          </section>

          <Gallery countries={this.state.countries} />




        </main>
      </div>
    );
  }
}

export default App;
