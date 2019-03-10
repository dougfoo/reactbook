import React, { Component } from 'react';
import SearchF from './Search';
//import axios from 'axios';
import Table from './Table';

var DEFAULT_QUERY = "redux";
var url = "https://hn.algolia.com/api/v1/search?query=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }
    // bindings
    this.setSearchResults = this.setSearchResults.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  setSearchResults(result) {
    this.setState({ result});
  }

  fetchStories(searchTerm) {
    fetch(`${url}${searchTerm}`).then(response => response.json()).then(result => this.setSearchResults(result)).catch(error => error);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    // axios.get () replace below ?
    console.log('DidMount: '+ url+searchTerm)
    this.fetchStories(searchTerm);
  }

  onDismiss = (id) => {
    console.log(id);
  }

  onMyClick = () => {
    console.log(this);
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchTerm: event.target.value})
  }

  onSubmitSearch(event) {
    const { searchTerm } = this.state;
    console.log('onSubmit term: ' + url + searchTerm)
    this.fetchStories(searchTerm);
    event.preventDefault();
  }

  render() {
    const { searchTerm, result } = this.state;

    return (
      <div className="App">
        <button onClick={() => this.onMyClick()} type='button'>Test Button1</button>
        <SearchF value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSubmitSearch}>
          Search
        </SearchF>
        {
          result && 
          <Table list={result.hits} />
        } 
      </div>
    );
  }
}

export default App;

