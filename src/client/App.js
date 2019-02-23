import React from 'react';
import PropTypes from 'prop-types';

import CountDown from './CountDown/CountDown.react';
import Album from './Album/Album.react';

import './app.css';

const App = ({ backgroundImages, photos }) => (
  <div>
    <CountDown backgroundImages={backgroundImages} />
    <Album photos={photos} />
  </div>
);

App.propTypes = {
  backgroundImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
      text: PropTypes.string
    })
  ).isRequired
};

export default App;
