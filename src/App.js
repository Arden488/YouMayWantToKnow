import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Favorites from './components/Favorites';
import SearchBar from './containers/SearchBar';
import WikiBox from './containers/WikiBox';
import ArticlesBox from './containers/ArticlesBox';
import VideoBox from './containers/VideoBox';
import PhotoBox from './containers/PhotoBox';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  control: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },
  headingBox: {
    marginBottom: 60,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    let heading = '';

    if(this.props.query) {
      heading = (
        <Grid item xs={12} className={classes.headingBox}>
          <Typography 
            variant="display1"
            align="center"
          >Search results for "{this.props.query}"</Typography>
        </Grid>
      );
    }

    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Favorites />
          </Grid>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          {heading}
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <div className={classes.control}>
                  <WikiBox />
                </div>
                <div className={classes.control}>
                  <VideoBox />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.control}>
                  <ArticlesBox />
                </div>
                <div className={classes.control}>
                  <PhotoBox />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    query: state.query,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  hot(module),
)(App);