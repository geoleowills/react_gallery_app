import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const Gallery = ({ photos }) => {
  let photoGallery;

  if (photos.length > 0) {
    photoGallery = photos.map((photo) => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        key={photo.id}
      />
    ));
  } else {
    photoGallery = <NoPhotos />;
  }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photoGallery}</ul>
    </div>
  );
};

export default Gallery;
