import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class PhotoBox extends Component {
  renderPhotos() {
    if (!this.props.photos[0] || !this.props.photos[0].data.photos)
      return <p>No photos</p>;

    return this.props.photos[0].data.photos.photo.map(photo => {
      const source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      return <GridListTile key={photo.id} cols={1}>
        <img src={source} />
      </GridListTile>;
    });
  }

  render() {
    return (
      <div>
        <GridList cellHeight={200} cols={3}>
          {this.renderPhotos()}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
  }
}

export default compose(
  connect(mapStateToProps),
)(PhotoBox);