import React from 'react';
import PropTypes from 'prop-types';

import CountDown from './CountDown/CountDown.react';

import './app.css';

const App = ({ backgroundImages }) => (
  <div>
    <CountDown backgroundImages={backgroundImages} />
  </div>
);

App.propTypes = {
  backgroundImages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
