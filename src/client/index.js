import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let backgroundImages = [];
let photos = [];

const photoPaths = [
  {
    image: import('../../public/assets/images/engagement/1.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/2.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/3.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/4.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/5.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/6.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/7.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/8.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/9.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/10.jpg'),
    text: ''
  },
  {
    image: import('../../public/assets/images/engagement/11.jpg'),
    text: ''
  }
];

const mobileBackgroundImages = [
  import('../../public/assets/images/mobile/background1.jpg'),
  import('../../public/assets/images/mobile/background2.jpg'),
  import('../../public/assets/images/mobile/background3.jpg'),
  import('../../public/assets/images/mobile/background4.jpg'),
  import('../../public/assets/images/mobile/background5.jpg'),
  import('../../public/assets/images/mobile/background6.jpg'),
  import('../../public/assets/images/mobile/background7.jpg'),
  import('../../public/assets/images/mobile/background8.jpg'),
  import('../../public/assets/images/mobile/background9.jpg')
];

const desktopBackgroundImages = [
  import('../../public/assets/images/desktop/background1.jpg'),
  import('../../public/assets/images/desktop/background2.jpg'),
  import('../../public/assets/images/desktop/background3.jpg'),
  import('../../public/assets/images/desktop/background4.jpg'),
  import('../../public/assets/images/desktop/background5.jpg'),
  import('../../public/assets/images/desktop/background6.jpg'),
  import('../../public/assets/images/desktop/background7.jpg'),
  import('../../public/assets/images/desktop/background8.jpg'),
  import('../../public/assets/images/desktop/background9.jpg'),
  import('../../public/assets/images/desktop/background10.jpg'),
  import('../../public/assets/images/desktop/background11.jpg'),
  import('../../public/assets/images/desktop/background12.jpg'),
  import('../../public/assets/images/desktop/background13.jpg')
];

const importBackgroundImages = () => {
  if (window.innerWidth < 550) {
    return Promise.all(mobileBackgroundImages);
  }
  return Promise.all(desktopBackgroundImages);
};

const importAlbumImages = () => Promise.all(
  photoPaths.map(photo => ({
    image: photo.image,
    text: photo.text
  }))
);

importBackgroundImages()
  .then((images) => {
    backgroundImages = images.map(image => image.default);
    return importAlbumImages();
  })
  .then((images) => {
    photos = images.map(image => ({
      image: image.image.default,
      text: image.text
    }));
  })
  .then(() => {
    ReactDOM.render(
      <App backgroundImages={backgroundImages} photos={photos} />,
      document.getElementById('root')
    );
  });
