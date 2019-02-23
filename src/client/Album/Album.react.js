import React, { Component } from 'react';
import PropTypes from 'prop-types';

const startText = [
  '我想了很久到今天该做些什么',
  '一直没有找到最满意的',
  '后来有一天我在翻关于你的照片',
  '......'
];

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
