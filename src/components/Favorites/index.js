import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  }
});

function Favorites(props) {
  const { classes } = props;
  
  return (
    <div>
      <Chip className={classes.chip} label="SpaceX" clickable />
      <Chip className={classes.chip} label="World Cup 2018" clickable />
      <Chip className={classes.chip} label="Hawking" clickable />
    </div>
  );
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favorites);