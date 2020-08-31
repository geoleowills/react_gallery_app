import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import Nav from "./Nav";
import NotFound from "./NotFound";
import apiKey from "./config/config";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  performSearch = (tag = "cats") => {
    this.setState({
      loading: true,
    });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photos: response.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  loadingTrue = () => {
    this.setState({
      loading: true,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/cats" />} />
            <Route
              path="/:tag"
              render={() => (
                <Gallery
                  performSearch={this.performSearch}
                  photos={this.state.photos}
                  loading={this.state.loading}
                  loadingTrue={this.loadingTrue}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
