import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ background: "#faf2e1", pb: 5 }}>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 1</Typography>
            <Typography variant="body2">Content for column 1</Typography>
            <Typography variant="body2">Content for column 1</Typography>
            <Typography variant="body2">Content for column 1</Typography>
            <Typography variant="body2">Content for column 1</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 2</Typography>
            <Typography variant="body2">Content for column 2</Typography>
            <Typography variant="body2">Content for column 2</Typography>
            <Typography variant="body2">Content for column 2</Typography>
            <Typography variant="body2">Content for column 2</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 3</Typography>
            <Typography variant="body2">Content for column 3</Typography>
            <Typography variant="body2">Content for column 3</Typography>
            <Typography variant="body2">Content for column 3</Typography>
            <Typography variant="body2">Content for column 3</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 4</Typography>
            <Typography variant="body2">Content for column 4</Typography>
            <Typography variant="body2">Content for column 4</Typography>
            <Typography variant="body2">Content for column 4</Typography>
            <Typography variant="body2">Content for column 4</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6">Column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
            <Typography variant="body2">Content for column 5</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
