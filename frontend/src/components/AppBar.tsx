import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import { NavBarPages } from "../utils/Types";
import { AppState } from "../redux/Store";
import { userLogout } from "../redux/actions/user_actions/userActions";

const pages: NavBarPages[] = [
  {
    name: "Home",
    link: "/"
  },
];

const rightPages: NavBarPages[] = [
  {
    name: "Login",
    link: "/login"
  },
  {
    name: "Signup",
    link: "/signup"
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null);
  const dispatch = useDispatch();
  const user = useSelector(
    (state: AppState) => state.user.user
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: "none", md: "flex" } }}
          >
            CV MAKER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            CV MAKER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.link}
                key={page.name}
                sx={{ my: 2, color: "white", display: "block",fontWeight: "bold"  }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box justifyContent="center" alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            {user ?
              <>
                <Typography
                
                sx={{ m: 2, color: grey[300], display: "block" }}
                >{user.email}</Typography>
                <Button
                  key="logout"
                  sx={{ my: 2, color: "white", fontWeight: "bold"  }}
                  onClick={()=>dispatch(userLogout())}
                >
                  Logout
                </Button>
              </> :
              rightPages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.link}
                  sx={{ my: 2, color: "white", display: "block",fontWeight: "bold"  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
