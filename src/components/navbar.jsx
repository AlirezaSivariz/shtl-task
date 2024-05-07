import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { TiThMenu } from "react-icons/ti";
import useAuthValidation from "@/hooks/useAuthValidation";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { token, isLoading } = useAuthValidation();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    router.reload();
  };

  return (
    <AppBar
      position="static"
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        color: "#000",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        mb: "1px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
          </Box>
        </Box>
        <Button
          onClick={handleLogout}
          type="submit"
          variant="contained"
          color="primary"
        >
          {token ? "Log Out" : "Login"}
        </Button>
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <TiThMenu />
          </IconButton>
        </Box>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }} onClick={toggleDrawer}>
            <Link href="/page1">
              <ListItem button>
                <ListItemText primary="Page 1" />
              </ListItem>
            </Link>
            <Link href="/page2">
              <ListItem button>
                <ListItemText primary="Page 2" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
