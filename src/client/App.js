import React from 'react';
import PropTypes from 'prop-types';

import CountDown from './CountDown/CountDown.react';
import Album from './Album/Album.react';

import config from '../../config.json';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countDownSeconds: Math.ceil(Math.random() * 10) + 10
    };
  }

  componentDidMount() {
    if (config.env === 'dev') {
      setInterval(() => {
        const { countDownSeconds } = this.state;
        if (countDownSeconds >= 0) {
          this.setState({ countDownSeconds: countDownSeconds - 1 });
        }
      }, 1000);
    }
  }

  render() {
    const { backgroundImages, photos } = this.props;
    const { countDownSeconds } = this.state;

    return (
      <div className="app">
        {countDownSeconds >= 0 && (
          <CountDown backgroundImages={backgroundImages} countDownSeconds={countDownSeconds} />
        )}
        {countDownSeconds < 0 && <Album photos={photos} />}
      </div>
    );
  }
}

App.propTypes = {
  backgroundImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          animation: PropTypes.string
        })
      ),
      text: PropTypes.string
    })
  ).isRequired
};

export default App;
