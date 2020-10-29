import React, { Component } from 'react';

import Header from './Header.js';

import Search from './Search.js';



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
    .then((data) => console.log(data))
}


  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <section className="search_filter">
            
          <Search />


          </section>




        </main>
      </div>
    );
  }
}

export default App;
