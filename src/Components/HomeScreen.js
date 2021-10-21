import React from 'react';
import { connect } from 'react-redux';
// import {Typography} from '@mui/material/';
import ItemsScreen from './ItemsScreen';
import CartScreen from './CartScreen';
import CartIcon from './CartIcon';
import CartUniqueItems from './CartUniqueItems';
import { makeStyles } from '@material-ui/core/styles';
import ClearCart from './ClearCart'

const HomeScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.HomeScreenDiv}>
      <CartIcon/>
      <CartUniqueItems/>
      <ClearCart/>
      <div className={classes.itemsAndCart}>        
        <ItemsScreen/>        
        <CartScreen/>
      </div>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const useStyles = makeStyles({  
  itemsAndCart:{
    display:'flex',
    flexDirection: 'column'
  },
  HomeScreenDiv:{
    width: '100%',
  }
});

export default connect(mapStateToProps)(HomeScreen);
