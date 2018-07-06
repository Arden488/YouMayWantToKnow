import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class VideoBox extends Component {
  renderFirstVideo() {
    if (!this.props.videos || this.props.videos.length < 1)
      return <p>No video</p>;

    const videoId = this.props.videos[0].id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return <iframe src={url} width="100%" height="300" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>;
  }

  renderOtherVideos() {
    if (!this.props.videos || this.props.videos.length < 2)
      return false;

    return (
      <List>
        {this.generateListItem(this.props.videos)}
      </List>
    )
  }

  generateListItem(data, element) {
    // delete data[Object.keys(data)[0]];
    // delete data[Object.keys(data)[data.length-1]];
    
    return data.slice(1,4).map(value =>
      <ListItem key={value.id.videoId} button>
        <img
          alt={value.snippet.title}
          src={value.snippet.thumbnails.default.url}
        />
        <ListItemText
          primary={value.snippet.title}
         />
      </ListItem>
    );
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            {this.renderFirstVideo()}
          </Grid>
          <Grid item xs={6}>
            {this.renderOtherVideos()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps)(VideoBox);