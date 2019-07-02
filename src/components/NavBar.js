import React from 'react'

import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import InputBase from '@material-ui/core/InputBase';

import Badge from '@material-ui/core/Badge';

import MenuItem from '@material-ui/core/MenuItem';

import Menu from '@material-ui/core/Menu';

import SearchIcon from '@material-ui/icons/Search';

import AccountCircle from '@material-ui/icons/AccountCircle';

import MailIcon from '@material-ui/icons/Mail';

import NotificationsIcon from '@material-ui/icons/Notifications';
import AddMovie from "./AddMovie"





const useStyles = makeStyles(theme => ({

  grow: {

    flexGrow: 1,

  },

  menuButton: {

    marginRight: theme.spacing(2),

  },

  title: {

    display: 'none',

    [theme.breakpoints.up('sm')]: {

      display: 'block',

    },

  },

  search: {

    position: 'relative',

    borderRadius: theme.shape.borderRadius,

    backgroundColor: fade(theme.palette.common.white, 0.15),

    '&:hover': {

      backgroundColor: fade(theme.palette.common.white, 0.25),

    },

    marginRight: theme.spacing(2),

    marginLeft: 0,

    width: '100%',

    [theme.breakpoints.up('sm')]: {

      marginLeft: theme.spacing(3),

      width: 'auto',

    },

  },

  searchIcon: {

    width: theme.spacing(7),

    height: '100%',

    position: 'absolute',

    pointerEvents: 'none',

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center',

  },

  inputRoot: {

    color: 'inherit',

  },

  inputInput: {

    padding: theme.spacing(1, 1, 1, 7),

    transition: theme.transitions.create('width'),

    width: '100%',

    [theme.breakpoints.up('md')]: {

      width: 500,

    },

  },

  sectionDesktop: {

    display: 'none',

    [theme.breakpoints.up('md')]: {

      display: 'flex',

    },

  },

  sectionMobile: {

    display: 'flex',

    [theme.breakpoints.up('md')]: {

      display: 'none',

    },

  },

}));





export default function NavBar(props) {

  

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);



  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  function handleProfileMenuOpen(event) {

    setAnchorEl(event.currentTarget);

  }



  function handleMobileMenuClose() {

    setMobileMoreAnchorEl(null);

  }



  function handleMenuClose() {

    setAnchorEl(null);

    handleMobileMenuClose();

  }







  const menuId = 'primary-search-account-menu';

  const renderMenu = (

    <Menu

      anchorEl={anchorEl}

      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}

      id={menuId}

      keepMounted

      transformOrigin={{ vertical: 'top', horizontal: 'right' }}

      open={isMenuOpen}

      onClose={handleMenuClose}

    >

      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

    </Menu>

  );



  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (

    <Menu

      anchorEl={mobileMoreAnchorEl}

      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}

      id={mobileMenuId}

      keepMounted

      transformOrigin={{ vertical: 'top', horizontal: 'right' }}

      open={isMobileMenuOpen}

      onClose={handleMobileMenuClose}

    >

      <MenuItem>

        <IconButton aria-label="Show 4 new mails" color="inherit">

          <Badge badgeContent={4} color="secondary">

            <MailIcon />

          </Badge>

        </IconButton>

        <p>Messages</p>

      </MenuItem>

      <MenuItem>

        <IconButton aria-label="Show 11 new notifications" color="inherit">

          <Badge badgeContent={11} color="secondary">

            <NotificationsIcon />

          </Badge>

        </IconButton>

        <p>Notifications</p>

      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>

        <IconButton

          aria-label="Account of current user"

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

    <div className={classes.grow}>

      <AppBar position="static">

        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>

            Movies App

          </Typography>

          <div className={classes.search}>

            <div className={classes.searchIcon}>

              <SearchIcon />

            </div>

            <InputBase

              placeholder="Search…"

              classes={{

                root: classes.inputRoot,

                input: classes.inputInput,

              }}

              inputProps={{ 'aria-label': 'Search' }}

              onChange={(event) => {

                props.searchUpdate(event.target.value)

              }

              }

            />

          </div>

          <div className={classes.grow} />
          <AddMovie/>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      {renderMenu}

    </div>

  );

}