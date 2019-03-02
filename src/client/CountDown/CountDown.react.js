import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { day } from './CountDown.constants';

import './CountDown.css';
import { substract } from './CountDown.utils';
import config from '../../../config.json';

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
  }

  componentDidMount() {
    this.fadeInterval = setInterval(this.fade, 6000);
    this.calculateInterval = setInterval(this.calculateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.fadeInterval);
    clearInterval(this.calculateInterval);
  }

  getClassName(index) {
    const { fadeIn, fadeOut } = this.state;
    if (index === fadeIn) {
      return 'count-down-img show';
    }
    if (index === fadeOut) {
      return 'count-down-img hide';
    }
    return 'count-down-img';
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

  renderProdCountdown() {
    const { countDown } = this.state;
    return (
      <div className="count-down">
        {countDown.days}
        {' Days '}
        {countDown.hours}
        {' Hours '}
        {countDown.minutes}
        {' Minutes '}
        {countDown.seconds}
        {' Seconds'}
      </div>
    );
  }

  renderLocalCountdown() {
    return (
      <div className="count-down">
        0 Days 0 Hours 0 Minutes
        {` ${this.props.countDownSeconds} seconds`}
      </div>
    );
  }

  renderCountdown() {
    if (config.env === 'dev') {
      return this.renderLocalCountdown();
    }
    return this.renderProdCountdown();
  }

  render() {
    const { backgroundImages } = this.props;
    return (
      <div className="count-down-container">
        {this.renderCountdown()}
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
  backgroundImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  countDownSeconds: PropTypes.number
};

export default CountDown;
