import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h2>404: Page Does Not Exist</h2>
    <h3>
      Please click <Link to="/">HERE</Link> to return home.
    </h3>
  </div>
);

export default NotFound;
