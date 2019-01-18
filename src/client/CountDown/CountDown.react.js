import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { day } from './CountDown.constants';

import './CountDown.css';
import { substract } from './CountDown.utils';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: 0,
      fadeOut: -1,
      countDown: substract(day, new Date())
    };
    this.fade = this.fade.bind(this);
    this.calculateDate = this.calculateDate.bind(this);
    console.log(day);
  }

  componentDidMount() {
    setInterval(this.fade, 6000);
    setInterval(this.calculateDate, 1000);
  }

  getClassName(index) {
    const { fadeIn, fadeOut } = this.state;
    if (index === fadeIn) {
      return 'show';
    }
    if (index === fadeOut) {
      return 'hide';
    }
    return '';
  }

  fade() {
    const { fadeIn, fadeOut } = this.state;
    const { backgroundImages } = this.props;
    if (fadeIn === backgroundImages.length - 1) {
      this.setState({ fadeIn: 0, fadeOut: fadeIn });
    } else if (fadeOut === backgroundImages.length - 1) {
      this.setState({ fadeIn: fadeIn + 1, fadeOut: 0 });
    } else {
      this.setState({ fadeIn: fadeIn + 1, fadeOut: fadeIn });
    }
  }

  calculateDate() {
    this.setState({ countDown: substract(day, new Date()) });
  }

  render() {
    const { backgroundImages } = this.props;
    const { countDown } = this.state;
    return (
      <div>
        <div className="count-down">
          {countDown.days}
          {' Days '}
          {countDown.minutes}
          {' Minutes '}
          {countDown.seconds}
          {' Seconds'}
        </div>
        {backgroundImages.map((backgroundImage, i) => (
          <img
            key={backgroundImage}
            alt="love ziwei"
            className={this.getClassName(i)}
            src={backgroundImage}
          />
        ))}
      </div>
    );
  }
}

CountDown.propTypes = {
  backgroundImages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CountDown;
