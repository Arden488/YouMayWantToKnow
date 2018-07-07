import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Zoom from '@material-ui/core/Zoom';

class PhotoBox extends Component {
  state = {
    initialLoad: false,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.photos) {
      setTimeout(() => {
        this.setState({ initialLoad: true });
      }, 500);
    }
  }

  renderPhotos() {
    return this.props.photos.data.photos.photo.map(photo => {
      const source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      return <GridListTile key={photo.id} cols={1}>
        <img src={source} />
      </GridListTile>;
    });
  }

  render() {
    if(this.props.loading)
      return <CircularProgress />;

    if(!this.props.photos)
      return false;

    return (
      <Zoom in={this.state.initialLoad} timeout={500}>
        <div>
          <GridList cellHeight={200} cols={3}>
            {this.renderPhotos()}
          </GridList>
        </div>
      </Zoom>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.photos.loading,
    photos: state.photos.data,
  }
}

export default compose(
  connect(mapStateToProps),
)(PhotoBox);