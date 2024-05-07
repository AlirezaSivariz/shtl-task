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

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

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
      sx={{ flexGrow: 1, bgcolor: "transparent", color: "#000" }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <Link href="/page1">
              <Button color="inherit">Page 1</Button>
            </Link>
            <Link href="/page2">
              <Button color="inherit">Page 2</Button>
            </Link>
          </Box>
        </Box>
        <Button
          onClick={handleLogout}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {/* <MenuIcon /> */} 88
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
