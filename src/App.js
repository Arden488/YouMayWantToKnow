import React from 'react';
import { hot } from 'react-hot-loader';

import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar';
import WikiBox from './components/WikiBox';
import ArticlesBox from './components/ArticlesBox';
import VideoBox from './components/VideoBox';
import TwitterBox from './components/TwitterBox';

import Grid from '@material-ui/core/Grid';

const App = () => {
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
              <WikiBox />
            </Grid>
            <Grid item xs={6}>
              <ArticlesBox />
            </Grid>
            <Grid item xs={6}>
              <VideoBox />
            </Grid>
            <Grid item xs={6}>
              <TwitterBox />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default hot(module)(App);