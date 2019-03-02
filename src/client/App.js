import React from 'react';
import PropTypes from 'prop-types';

import CountDown from './CountDown/CountDown.react';
import Album from './Album/Album.react';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countDownSeconds: 10
    };
  }

  componentDidMount() {
    const { countDownSeconds } = this.state;
    setTimeout(() => {
      this.setState({ countDownSeconds: countDownSeconds - 1 });
    }, 1000);
  }

  render() {
    const { backgroundImages, photos } = this.props;

    return (
      <div className="app">
        {/* <CountDown backgroundImages={backgroundImages} /> */}
        <Album photos={photos} />
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
