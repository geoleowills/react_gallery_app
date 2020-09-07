import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const Gallery = ({ photos }) => {
  /**
   * Loops over the photos array passed from App.js,
   * creates a 'photo' component for each element in the array
   * and stores this in the new photoGallery array and then passes
   * this into the HTML.
   */

  let photoGallery;

  if (photos.length > 0) {
    photoGallery = photos.map((photo) => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        key={photo.id}
        title={photo.title}
      />
    ));
  } else {
    photoGallery = <NoPhotos />;
  }

  // Renders the gallery into HTML
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photoGallery}</ul>
    </div>
  );
};

export default Gallery;
