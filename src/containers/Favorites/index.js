import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchData } from '../../actions';

import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  }
});

class Favorites extends Component {
  handleFavoriteClick(query) {
    if(query != this.props.query)
      this.props.fetchData(query);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Chip className={classes.chip} onClick={() => this.handleFavoriteClick("SpaceX")} label="SpaceX" clickable />
        <Chip className={classes.chip} onClick={() => this.handleFavoriteClick("World Cup 2018")} label="World Cup 2018" clickable />
        <Chip className={classes.chip} onClick={() => this.handleFavoriteClick("Hawking")} label="Hawking" clickable />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (query) => dispatch(fetchData(query)),
  }
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Favorites);