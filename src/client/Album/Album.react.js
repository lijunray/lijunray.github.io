import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Album extends Component {
  render() {
    console.log(this.props.photos);
    return <div />;
  }
}

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Album;
