import React from "react";

// If not photos are returned from the search, this component is shown.
const NoPhotos = () => (
  <div className="not-found">
    <h3>No Results Found</h3>
    <p>Your search did not return any results. Please try again.</p>
  </div>
);

export default NoPhotos;
