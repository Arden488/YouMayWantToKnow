import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { compose } from 'recompose';

import { fetchData } from '../../actions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: '50px auto 50px',
    [theme.breakpoints.up('lg')]: {
      width: 1170,
    },
  },
  input: {
    flexGrow: 1,
  }
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.query,
    })
  } 

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <Grid container spacing={8} className={classes.root} alignItems="baseline">
            <Grid item className={classes.input}>
              <TextField
                label="Search for something"
                placeholder="Something like... World Cup 2018"
                fullWidth
                margin="normal"
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item>
              <Button 
                variant="fab" 
                mini
                color="primary" 
                aria-label="search"
                type="submit"
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    });
  } 

  handleSearchSubmit(event) {
    event.preventDefault();

    if(this.state.value != '')
      this.props.fetchData(this.state.value);
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    query: state.query,
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    fetchData: (query) => dispatch(fetchData(query)),
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBar);