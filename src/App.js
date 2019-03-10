import React, { Component } from 'react';
import SearchF from './Search';
import axios from 'axios';
import Table from './Table';

var DEFAULT_QUERY = "redux"; 
var url = "https://hn.algolia.com/api/v1/search?query=";  // working

const Loading = () => 
  <div>Loading ...</div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
    }
    // bindings
    this.setSearchResults = this.setSearchResults.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    console.log('DidMount: ' + url + searchTerm)
    this.setState({searchKey: searchTerm});
    this.fetchStories(searchTerm);
  }

  setSearchResults(result) {    
    const { searchKey, results } = this.state;    
    this.setState({
      results: {
        ...results,
        [searchKey]: result
      },
      isLoading: false,
    });
  }

  needToSearch(searchTerm) {
    var flag = !this.state.results[searchTerm];
    console.log('need to search: '+searchTerm+': '+flag);
    return flag;
  }

  fetchStories(searchTerm) {
    // fetch(`${url}${searchTerm}`).then(response => response.json()).
    //    then(result => this.setSearchResults(result)).
    //    catch(error => this.setState({error}));
    this.setState({ isLoading: true });
    axios(`${url}${searchTerm}`).then(result => this.setSearchResults(result.data)).
      catch(error => {       
        console.log(error);
        console.log(Object.keys(error));
//        this.setState({ error }); -- not sure how to set error 
      });
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
    this.setState({ searchKey: searchTerm })
    if (this.needToSearch(searchTerm)) {
      this.fetchStories(searchTerm);
    }
    event.preventDefault();
  }

  render() {
    const { searchTerm, results, searchKey, error, isLoading, } = this.state;

    if (error) {
      console.log('error'+error);
      return <p>Error {error}</p>
    }
    else {
      return (
        <div className="App">
          <button onClick={() => this.onMyClick()} type='button'>Test Button1</button>
          <SearchF value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSubmitSearch}>
            Searchs
          </SearchF>
          { isLoading ? <Loading/> : '' }
          {
            results && results[searchKey] &&  
            <Table list={results[searchKey].hits} />
          } 
        </div>
      );
    }
  }
}

export default App;

