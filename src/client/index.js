import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let backgroundImages = [];
if (window.innerWidth < 550) {
  Promise.all([
    import('../../public/assets/images/mobile/background1.jpg'),
    import('../../public/assets/images/mobile/background2.jpg'),
    import('../../public/assets/images/mobile/background3.jpg'),
    import('../../public/assets/images/mobile/background4.jpg'),
    import('../../public/assets/images/mobile/background5.jpg'),
    import('../../public/assets/images/mobile/background6.jpg'),
    import('../../public/assets/images/mobile/background7.jpg'),
    import('../../public/assets/images/mobile/background8.jpg'),
    import('../../public/assets/images/mobile/background9.jpg')
  ]).then((images) => {
    backgroundImages = images.map(image => image.default);
    ReactDOM.render(<App backgroundImages={backgroundImages} />, document.getElementById('root'));
  });
} else {
  Promise.all([
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
  ]).then((images) => {
    backgroundImages = images.map(image => image.default);
    ReactDOM.render(<App backgroundImages={backgroundImages} />, document.getElementById('root'));
  });
}
