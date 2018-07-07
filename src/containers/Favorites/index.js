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

  renderChips(topics) {
    const { classes } = this.props;

    return topics.map(topic => {
      return <Chip 
        className={classes.chip} 
        onClick={() => this.handleFavoriteClick(topic)} 
        label={topic} 
        clickable 
      />
    })
  }

  render() {
    const topics = [
      'SpaceX',
      'World Cup 2018',
      'Hawking',
      'Lionel Messi',
      'Donald Trump',
      'Christmas',
      'Yuri Gagarin',
      'IKEA',
      'Westworld',
      'Amazon Alexa',
      'Ethereum',
      'GDPR',
      'Bob Marley',
    ];
    
    return (
      <div>
        {this.renderChips(topics)}
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