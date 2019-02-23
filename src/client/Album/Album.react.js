import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Album extends Component {
  render() {
    return <div />;
  }
}

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Album;
