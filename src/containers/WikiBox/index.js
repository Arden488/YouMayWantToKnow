import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchWiki } from '../../actions';

import Grid from '@material-ui/core/Grid';

class WikiBox extends Component {
  render() {
    const data = this.props.wikiData.data;

    if(!data) {
      return 'No wiki info';
    }

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
      <div>
        <Grid container spacing={16}>
          {image}
          <Grid item xs={textGridSize}>
            <p dangerouslySetInnerHTML={{__html: text}}></p>
            <p>
              <a href={url} target="_blank">Read more</a>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wikiData: state.wikiData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWiki: (query) => dispatch(fetchWiki(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiBox);