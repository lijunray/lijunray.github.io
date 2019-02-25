import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './Page.react';

import './Album.css';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPageIndex: 0
    };

    this.changePageIndexHandler = this.changePageIndexHandler.bind(this);
  }

  changePageIndexHandler() {
    const { currentPageIndex } = this.state;
    this.setState({ currentPageIndex: currentPageIndex + 1 });
  }

  render() {
    const { photos } = this.props;
    const { currentPageIndex } = this.state;
    return (
      <div className="album">
        {photos.map((photo, index) => (index === currentPageIndex ? (
          <Page
            key={`page-${index}`}
            images={photo.images}
            texts={photo.texts}
            onChangePageIndex={this.changePageIndexHandler}
          />
        ) : null))}
      </div>
    );
  }
}

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Album;
