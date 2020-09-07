import React, { Component } from "react";

// withRouter is needed in order for us to use 'this.props.history(path)' and set the url path.
import { withRouter } from "react-router-dom";

// Creates the search field.
class SearchForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // Calls the 'performSearch' function created in App.js using the input value.
    this.props.onSearch(this.searchText.value);
    // Creates the path.
    let path = `/search/${this.searchText.value}`;
    // Calls the search path in the browser.
    this.props.history.push(path);
    // Resets the input area.
    e.currentTarget.reset();
  };

  render() {
    return (
      // Calls the handleSubmit function when the form is submitted.
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          // ref links the input field to 'this.searchText', so this.searchText.value can
          // be called when needed above.
          ref={(input) => (this.searchText = input)}
          name="search"
          placeholder="Search"
          required
        />
        <button type="submit" className="search-button">
          <svg
            fill="#fff"
            height="24"
            viewBox="0 0 23 23"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

export default withRouter(SearchForm);
