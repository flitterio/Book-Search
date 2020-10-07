import React, {Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    
handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit called');
    this.props.onSubmitForm(event.target.search.value)
  }
  
    render() {
        return(
            <div className="searchform">
                <h1>Google Book Search </h1>
                <form className="searchform__form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" name="search" id="search" placeholder="book" aria-label='search'/>
                    <button type="submit" value="submit">Search</button>
                    
                </form>
            </div>
        )
    }
}

export default SearchForm;