import React from 'react';
import { connect } from 'react-redux';
import {Typography} from '@mui/material/';
import ItemsScreen from './ItemsScreen';
import CartScreen from './CartScreen'
import CartIcon from './CartIcon'
import CartUniqueItems from './CartUniqueItems'

const HomeScreen = (props) => {
  return (
    <div>
      <CartIcon/>
      <CartUniqueItems/>
      <Typography variant="h3" gutterBottom>Items you can add to Cart</Typography>
      <Typography variant="h5" gutterBottom>number of item can be added: {props.items.allItems.length}</Typography>
      <ItemsScreen/>

      <Typography variant="h3" gutterBottom>Items in the Cart</Typography>
      <CartScreen/>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

export default connect(mapStateToProps)(HomeScreen);
