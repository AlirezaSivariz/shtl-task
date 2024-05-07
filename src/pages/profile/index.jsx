import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  }));

  const isLoggedIn = useSelector((state) => state.login);

  console.log("isLoggedIn", isLoggedIn);
  return (
    <Box sx={{ padding: 16 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item>
                <Avatar
                  src="/profile-picture.jpg"
                  alt="Profile Picture"
                  sx={{ width: 120, height: 120 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">John Doe</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Web Developer
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <SectionTitle variant="h6">About</SectionTitle>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis nibh vel ipsum ultrices, sed feugiat quam rutrum. Nullam
              euismod, ipsum a imperdiet lobortis, diam mauris pharetra erat,
              eget commodo urna est eget lacus.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <SectionTitle variant="h6">Skills</SectionTitle>
            <Typography variant="body1">
              - HTML5
              <br />
              - CSS3
              <br />
              - JavaScript
              <br />- React.js
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
