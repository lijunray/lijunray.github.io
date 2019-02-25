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

let backgroundImages = [];
let photos = [];

importBackgroundImages()
  .then((images) => {
    backgroundImages = images.map(image => image.default);
    photos = photoPaths;
  })
  .then(() => {
    ReactDOM.render(
      <App backgroundImages={backgroundImages} photos={photos} />,
      document.getElementById('root')
    );
  });
