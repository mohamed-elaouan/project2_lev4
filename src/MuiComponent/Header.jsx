import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = ({ setMenuToggle, MenuToggle }) => {
  const inputElement = useRef();
  const MobileElement = useRef();
  const [ShowMenu, setShowMenu] = useState(false);
  const [MobileMenu, setMobileMenu] = useState(false);
  const MenuProfil = (
    <Menu
      id="basic-menu"
      anchorEl={inputElement.current}
      open={ShowMenu}
      onClose={() => {
        setShowMenu(false);
      }}
    >
      <MenuItem
        onClick={() => {
          setShowMenu(false);
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          setShowMenu(false);
        }}
      >
        My account
      </MenuItem>
      <MenuItem
        onClick={() => {
          setShowMenu(false);
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      open={MobileMenu}
      // Si tu utilise UseRef !!notForget ".current"
      anchorEl={MobileElement.current}
      onClose={() => {
        setMobileMenu(false);
      }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMobileMenu(false);
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    //sticky => Position=Fixed
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2,display:{md:"none"} }}
          onClick={() => {
            setMenuToggle(MenuToggle === "block" ? "none" : "block");
          }}
        >
          {MenuToggle === "block" ? <ClearIcon/> : <MenuIcon />}
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Elaouan-Shop
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <IconButton
            sx={{ height: "40px", width: "40px" }}
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton
            sx={{ height: "40px", width: "40px" }}
            size="large"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            onClick={() => {
              setShowMenu(true);
            }}
            size="large"
            ref={inputElement}
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar
              alt="Mohamed Elaouan"
              sx={{ height: "40px", width: "40px" }}
              src="https://firebasestorage.googleapis.com/v0/b/pourresoudreproblem.appspot.com/o/images%2F4x4.jpg?alt=media&token=27a6c514-4039-4a65-ab04-dd51c9e4d137"
            />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            ref={MobileElement}
            onClick={() => {
              setMobileMenu(!MobileMenu);
            }}
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {MenuProfil}
      {renderMobileMenu}
    </AppBar>
  );
};

export default Header;
