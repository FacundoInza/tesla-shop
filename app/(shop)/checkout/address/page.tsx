import { MetadataPage } from "@/interfaces";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const metadata: MetadataPage = {
  title: "Address",
  description: "Address page confirmation",
};

const AddressPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Address
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Address 2"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Zip Code"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6} mt={2}>
          <FormControl fullWidth>
            <Select variant="filled" label="Pais" value={1}>
              <MenuItem value={1}>Costa rica</MenuItem>
              <MenuItem value={2}>Mexico</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth margin="normal" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone number"
            variant="filled"
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display="flex" justifyContent="end">
        <Button variant="contained" color="secondary" className="circular-btn">
          Continue
        </Button>
      </Box>
    </>
  );
};

export default AddressPage;
