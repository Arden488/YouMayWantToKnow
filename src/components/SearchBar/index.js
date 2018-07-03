import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = () => (
  <div>
    <TextField
      label="Search for something"
      placeholder="Something like... World Cup 2018"
      fullWidth
      margin="normal"
    />
  </div>
);

export default SearchBar;