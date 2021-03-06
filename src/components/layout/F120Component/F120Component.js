import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Photo from './components/Photo/Photo';
import Lightbox from './../Lightbox/Lightbox';

import classes from './F120Component.module.css';

class F120Component extends Component {
  state = {
    lightboxIsOpen: false,
    imageIndex: 0
  };
  openLightbox = index => {
    this.setState({ lightboxIsOpen: true, imageIndex: index });
  };
  render() {
    const photos = this.props.images.map((image, i) => {
      return <Photo src={image} key={i} index={i} openLightbox={this.openLightbox} />;
    });
    let lightbox;
    if (this.state.lightboxIsOpen) {
      lightbox = (
        <Lightbox
          imageIndex={this.state.imageIndex}
          images={this.props.images}
          closeLightbox={() => this.setState({ lightboxIsOpen: false })}
        />
      );
    }
    return (
      <Fragment>
        <div className={classes.wrapper}>
          <div className={classes.container}>{photos}</div>
        </div>
        {lightbox}
      </Fragment>
    );
  }
}

F120Component.propTypes = {
  images: PropTypes.array.isRequired
};

export default F120Component;
