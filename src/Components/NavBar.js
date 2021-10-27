import * as React from 'react';
import CartIcon from './CartIcon';
import {AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu, } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link,useHistory  } from "react-router-dom";


const NavBar = (props)=> {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexgrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link to="/" className="nav-link" className={classes.menuLink}>Home</Link> */}
            <Link to="/" className={classes.menuLink}>Home</Link>
            <Link to="/allitems" className={classes.menuLink}>All Items</Link>
            <Link to="/cart"  className={classes.menuLink}>Cart</Link>
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
         <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={()=>history.push('/cart')}
            color="inherit"
            className={classes.cartIconQty}
          >
          <ShoppingCartRoundedIcon/>
          <CartIcon className={classes.itemInCart}/>
        </IconButton>

            
          </IconButton>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >  
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyles = makeStyles({  
  menuLink:{
    padding: '0 10px',
    textDecoration: 'none',
    color: '#FFF',
  },
  cartIcon:{
    // padding: '0 10px',
  },
  itemInCart:{
    color: '#333',
    fontSize: '7px',
    position: 'relative',
    top: '-14px',
    left: '19px'
  },
  cartIconQty:{
    display: 'flex',
    flexDirection: 'column-reverse'
  }
});

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

export default connect(mapStateToProps)(NavBar);