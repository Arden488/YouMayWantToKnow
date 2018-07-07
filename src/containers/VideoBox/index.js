import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Zoom from '@material-ui/core/Zoom';

class VideoBox extends Component {
  state = {
    initialLoad: false,
    currentVideoId: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVideoId !== this.props.currentVideoId) {
      this.setState({ currentVideoId: nextProps.currentVideoId });
    }

    if(nextProps.videos) {
      setTimeout(() => {
        this.setState({ initialLoad: true });
      }, 500);
    }
  }

  renderCurrentVideo() {
    const url = `https://www.youtube.com/embed/${this.state.currentVideoId}`;

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

  handleChangeVideo(e) {
    this.setState({
      currentVideoId: e.id.videoId,
    })
  }

  generateListItem(data, element) {    
    return data.slice(1,4).map(value =>
      <ListItem dense onClick={() => this.handleChangeVideo(value)} key={value.id.videoId} button>
        <img
          alt={value.snippet.title}
          src={value.snippet.thumbnails.default.url}
          style={{ width: '30%' }}
        />
        <ListItemText
          primary={value.snippet.title}
         />
      </ListItem>
    );
  }

  render() {
    if(this.props.loading)
      return <CircularProgress />;

    if(!this.props.videos)
      return false;

    return (
      <Zoom in={this.state.initialLoad} timeout={500}>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} lg={7} xl={6}>
              {this.renderCurrentVideo()}
            </Grid>
            <Grid item xs={12} lg={5} xl={6}>
              {this.renderOtherVideos()}
            </Grid>
          </Grid>
        </div>
      </Zoom>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentVideoId: state.videos.currentVideoId,
    loading: state.videos.loading,
    videos: state.videos.data,
  }
}

export default connect(mapStateToProps)(VideoBox);