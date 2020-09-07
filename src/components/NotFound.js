import React from "react";
import { Link } from "react-router-dom";

// If a url is entered that doesnt match any exisiting routes, this component is shown.
const NotFound = () => (
  <div className="not-found">
    <h2>404: Page Does Not Exist</h2>
    <h3>
      Please click <Link to="/">HERE</Link> to return home.
    </h3>
  </div>
);

export default NotFound;
