import TextField from '@mui/material/TextField';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';

export const Form = () => {

  const [state, setState] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl >
      <Grid container spacing={2}>
        <Grid sm={12} md={6}>

          <TextField fullWidth
            required
            id="outlined-required"
            label="First Name"
            defaultValue=""
          />

        </Grid>

        <Grid sm={12} md={6}>

          <TextField fullWidth
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />

        </Grid>

        <Grid sm={12} md={6}>

          <TextField fullWidth
            required
            id="outlined-required"
            label="Email Address"
            defaultValue=""
          />

        </Grid>

        <Grid sm={12} md={6}>

          <TextField fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined" />

        </Grid>

        <Grid sm={12} md={6}>

          <TextField fullWidth
            required
            id="outlined-required"
            label="Country"
            defaultValue=""
          />

        </Grid>

        <Grid sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >Select State *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Select State *"
              onChange={handleChange}
            >
              <MenuItem value={1}>Los Angels</MenuItem>
              <MenuItem value={2}>San Diego</MenuItem>
              <MenuItem value={3}>Santa Monica</MenuItem>
            </Select>
          </FormControl>


        </Grid>

      </Grid>













    </FormControl>
  )
}

