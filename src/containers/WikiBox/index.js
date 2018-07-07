import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWiki } from '../../actions';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    float: 'right',
  }
});

class WikiBox extends Component {
  state = {
    initialLoad: false,
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.wikiData) {
      setTimeout(() => {
        this.setState({ initialLoad: true });
      }, 500);
    }
  }

  render() {
    const { classes } = this.props;

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
      <Zoom in={this.state.initialLoad}>
        <div>
          <div className={classes.root}>
            <Grid container spacing={16}>
              {image}
              <Grid item xs={textGridSize}>
                <p dangerouslySetInnerHTML={{__html: text}}></p>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="outlined" 
                  className={classes.button}
                  target="_blank"
                  href={url}
                >Read more</Button>
              </Grid>
            </Grid>
          </div>
          <Divider />
        </div>
      </Zoom>
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

WikiBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(WikiBox);