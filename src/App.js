import React from 'react';
import { hot } from 'react-hot-loader';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Favorites from './components/Favorites';
import SearchBar from './containers/SearchBar';
import WikiBox from './containers/WikiBox';
import ArticlesBox from './containers/ArticlesBox';
import VideoBox from './containers/VideoBox';
import PhotoBox from './containers/PhotoBox';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  control: {
    padding: theme.spacing.unit * 2,
  }
});

const App = (props) => {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Favorites />
        </Grid>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <Paper className={classes.control}>
                <WikiBox />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.control}>
                <ArticlesBox />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.control}>
                <VideoBox />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.control}>
                <PhotoBox />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles),
  hot(module),
)(App);