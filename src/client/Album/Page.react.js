import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import {
  fadeInUp, bounceInUp, fadeOut, bounceInLeft, bounceInRight
} from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import { containBackspace, removeBackspacePrefix } from './Album.utils';
import {
  ANIMATION_FADE_IN,
  ANIMATION_BOUNCE_IN_UP,
  ANIMATION_FADE_OUT,
  ANIMATION_BOUNCE_IN_LEFT,
  ANIMATION_BOUNCE_IN_RIGHT
} from '../app.constants';

import 'react-typist/dist/standalone/Typist';
import 'react-typist/dist/Typist.css';

const renderText = (text) => {
  let textToRender = text;
  if (containBackspace(text)) {
    textToRender = removeBackspacePrefix(textToRender);
    return [
      <span key={text}>{textToRender}</span>,
      <Typist.Backspace count={textToRender.length} delay={500} />,
      <Typist.Delay key={`${text}-delay`} ms={1000} />,
      <br key={`${text}-br`} />
    ];
  }
  return [
    <span key={text}>{textToRender}</span>,
    <Typist.Delay key={`${text}-delay`} ms={1000} />,
    <br key={`${text}-br`} />
  ];
};

const animationStyle = {
  [ANIMATION_FADE_IN]: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, ANIMATION_FADE_IN)
  },
  [ANIMATION_FADE_OUT]: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOut, ANIMATION_FADE_OUT)
  },
  [ANIMATION_BOUNCE_IN_UP]: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInUp, ANIMATION_BOUNCE_IN_UP)
  },
  [ANIMATION_BOUNCE_IN_LEFT]: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, ANIMATION_BOUNCE_IN_LEFT)
  },
  [ANIMATION_BOUNCE_IN_RIGHT]: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInRight, ANIMATION_BOUNCE_IN_RIGHT)
  }
};

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showImages: false,
      fadingOut: false
    };

    this.onTypingDoneHandler = this.onTypingDoneHandler.bind(this);
  }

  onTypingDoneHandler() {
    this.setState({ showImages: true });
    const { onChangePageIndex, isLastOne } = this.props;
    setTimeout(() => {
      if (!isLastOne) {
        this.setState({ fadingOut: true });
      }
      setTimeout(() => {
        onChangePageIndex();
      }, 1000);
    }, 3000);
  }

  getPageRootStyle() {
    const { fadingOut } = this.state;
    if (fadingOut) {
      return animationStyle[ANIMATION_FADE_OUT];
    }
    return undefined;
  }

  renderImages() {
    const { showImages } = this.state;
    const { images, texts } = this.props;
    const len = images.length;

    if (!showImages || len === 0) {
      return null;
    }

    if (len === 1) {
      return (
        <div className="images single-image">
          {images.map(image => (
            <img key={texts} alt="images" style={animationStyle[image.animation]} src={image.src} />
          ))}
        </div>
      );
    }
    if (len === 2) {
      return (
        <div className="images two-images">
          {images.map((image, index) => (
            <img
              key={`texts-${index}`}
              alt="images"
              style={animationStyle[image.animation]}
              src={image.src}
            />
          ))}
        </div>
      );
    }
    return (
      <div className="images three-images">
        {images.map((image, index) => (
          <img
            key={`texts-${index}`}
            alt="images"
            style={animationStyle[image.animation]}
            src={image.src}
          />
        ))}
      </div>
    );
  }

  render() {
    const { images, texts } = this.props;
    console.log(images, texts);

    return (
      <StyleRoot style={{ height: '100%' }}>
        <div style={this.getPageRootStyle()} className="page">
          <Typist avgTypingDelay={100} onTypingDone={this.onTypingDoneHandler}>
            {texts.map(text => renderText(text))}
          </Typist>
          {this.renderImages()}
        </div>
      </StyleRoot>
    );
  }
}

Page.defaultProps = {
  isLastOne: false
};

Page.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      animation: PropTypes.string
    })
  ).isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangePageIndex: PropTypes.func.isRequired,
  isLastOne: PropTypes.bool
};

export default Page;
