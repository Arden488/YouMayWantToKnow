import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: '50px auto 100px',
    [theme.breakpoints.up('lg')]: {
      width: 1170,
    },
  },
  input: {
    flexGrow: 1,
  }
});

function SearchBar(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={8} className={classes.root} alignItems="baseline">
        <Grid item className={classes.input}>
          <TextField
            label="Search for something"
            placeholder="Something like... World Cup 2018"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item>
          <Button 
            variant="fab" 
            mini
            color="primary" 
            aria-label="search"
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);