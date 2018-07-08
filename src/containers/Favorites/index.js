import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTrends } from '../../actions';

import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  }
});

class Favorites extends Component {
  // componentWillMount() {
  //   this.props.fetchTrends();
  // }

  handleFavoriteClick(query) {
    if(query != this.props.query)
      this.props.fetchData(query);
  }

  renderChips(topics) {
    const { classes } = this.props;

    return topics.map(topic => {
      return <Chip 
        key={topic}
        className={classes.chip} 
        onClick={() => this.handleFavoriteClick(topic)} 
        label={topic} 
        clickable 
      />
    })
  }

  render() {
    if (!this.props.trends)
      return false;

    return (
      <div>
        {this.renderChips(this.props.trends)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.query,
    trends: state.trends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrends: () => dispatch(fetchTrends()),
  }
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Favorites);