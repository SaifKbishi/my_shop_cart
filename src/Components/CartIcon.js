import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button} from '@mui/material/';


const CartIcon = (props) => {
  return (
    <Typography>
      Total items in the Cart: {props.items.cart.length}
    </Typography>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

export default connect(mapStateToProps)(CartIcon);