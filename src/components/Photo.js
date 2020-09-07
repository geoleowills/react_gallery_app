import React from "react";

// Takes in a URL and title props, creates img within an li using the API data.
const Photo = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Photo;
