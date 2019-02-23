import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { mobileBackgroundImages, desktopBackgroundImages, photoPaths } from './app.constants';

const importBackgroundImages = () => {
  if (window.innerWidth < 550) {
    return Promise.all(mobileBackgroundImages);
  }
  return Promise.all(desktopBackgroundImages);
};

const importAlbumImages = () => Promise.all(
  photoPaths.map(photo => ({
    images: photo.images,
    text: photo.text
  }))
);

let backgroundImages = [];
let photos = [];

importBackgroundImages()
  .then((images) => {
    backgroundImages = images.map(image => image.default);
    return importAlbumImages();
  })
  .then((images) => {
    photos = images.map(image => ({
      image: image.images.map(i => i.default),
      text: image.text
    }));
  })
  .then(() => {
    ReactDOM.render(
      <App backgroundImages={backgroundImages} photos={photos} />,
      document.getElementById('root')
    );
  });
