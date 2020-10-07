import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
//import Results from './Results/Results';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: " ",
      books: [],
    };
  }

  /*SearchBook(searchResults){
    this.setState({
      books: [this.state.books, searchResults]
    });
  } 
*/


 componentDidMount(){
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    const url= baseUrl + this.state.searchTerm
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer AIzaSyCn5csLIuUbU9pEH3yIdiTvy3oPfNiAjIw",
        "Content-Type":"application/json"
      }
     
    };
    fetch(url, options)
    .then(res => {
      if(!res.ok){
        throw new Error('Something went wrong please try again later');
      }
      return res;
    })
    .then(res => res.json())
    .then (data => {
      this.setState({
        books: data,
        error: null
      });
    })
    .catch (err => {
      this.setState({
        error: err.message
      });
    });
    console.log(this.state.books);
  }


handleSearchForm = (searchTerm) =>{
  console.log('handlesearchform', {searchTerm})
  console.log(this.state.searchTerm)
}
render(){
return(
  <div className="App">
      <SearchForm onSubmitForm={this.handleSearchForm}/>
  </div>
  );
}
}

export default App;