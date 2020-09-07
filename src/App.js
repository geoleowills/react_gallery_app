// Imports React and React-Rotuer.
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Imports components.
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import apiKey from "./config/config";

// Creates App component.
class App extends Component {
  // Creates the arrays for search photos and default tags,
  // creates state for whether loading is true or false.
  constructor() {
    super();
    this.state = {
      photos: [],
      australia: [],
      animals: [],
      cars: [],
      loading: true,
    };
  }

  // Calls the performSearch method for the three options when the component mounts.
  componentDidMount() {
    this.performSearch("australia");
    this.performSearch("animals");
    this.performSearch("cars");
  }

  // Funtion that takes in a 'tag', uses fetch api and saves the relevant data to state.
  performSearch = (tag) => {
    this.setState({ loading: true });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((response) => {
        if (tag === "australia") {
          this.setState({
            // Both australia and photos are being set to the same, this is because if the Australia button
            // has been clicked it will render the /australia page and access the australia state, but
            // if australia has been searched instead, it will render the /search/australia page and need access
            // to the photos state instead.
            australia: response.photos.photo,
            photos: response.photos.photo,
          });
        } else if (tag === "animals") {
          this.setState({
            animals: response.photos.photo,
            photos: response.photos.photo,
          });
        } else if (tag === "cars") {
          this.setState({
            cars: response.photos.photo,
            photos: response.photos.photo,
          });
        } else {
          this.setState({
            photos: response.photos.photo,
          });
        }
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/australia" />}
              />
              <Route
                path="/search/:tag"
                render={() => <Gallery photos={this.state.photos} />}
              />
              <Route
                exact
                path="/australia"
                render={() => <Gallery photos={this.state.australia} />}
              />
              <Route
                exact
                path="/animals"
                render={() => <Gallery photos={this.state.animals} />}
              />
              <Route
                exact
                path="/cars"
                render={() => <Gallery photos={this.state.cars} />}
              />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
