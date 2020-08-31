import React from "react";
import Photo from "./Photo";
import { withRouter } from "react-router-dom";

const Gallery = (props) => {
  let tag = props.match.params.tag;
  props.performSearch(tag);

  const photos = props.photos;
  const loading = props.loading;

  let photoGallery;

  if (photos.length > 0) {
    photoGallery = photos.map((photo) => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
    ));
  } else if (loading) {
    photoGallery = (
      <li class="not-found">
        <h3>Loading...</h3>
      </li>
    );
  } else {
    photoGallery = (
      <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    );
  }
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>{photoGallery}</ul>
    </div>
  );
};

export default withRouter(Gallery);
