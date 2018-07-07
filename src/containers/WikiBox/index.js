import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchWiki } from '../../actions';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

class WikiBox extends Component {
  
  render() {
    if(this.props.loading)
      return <CircularProgress />;

    if(!this.props.wikiData)
      return false;

    const data = this.props.wikiData.data;

    const pages = data.query.pages;
    const firstPageId = Object.keys(pages)[0];
    const pageData = pages[firstPageId];
    
    const title = pageData.title;
    const text = pageData.extract;
    let image;
    const imageSrc = pageData.thumbnail ? pageData.thumbnail.source : '';
    const url = `http://en.wikipedia.org/wiki?curid=${firstPageId}`;
    let textGridSize = 12;

    if(imageSrc) {
      textGridSize = 9;
      image = (
        <Grid item xs={3}>
          <img src={imageSrc} alt={title} width="100%" height="auto" />
        </Grid>
      );
    }

    return (
      <div hidden={this.props.loading ? 'hidden' : ''}>
        <Grid container spacing={16}>
          {image}
          <Grid item xs={textGridSize}>
            <p dangerouslySetInnerHTML={{__html: text}}></p>
            <p>
              <a href={url} target="_blank">Read more</a>
            </p>
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.wikiData.loading,
    wikiData: state.wikiData.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWiki: (query) => dispatch(fetchWiki(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiBox);