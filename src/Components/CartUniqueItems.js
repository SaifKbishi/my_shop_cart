import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button} from '@mui/material/';

const CartUniqueItems = (props) => {
  const uniqueItems = (item, index, self)=>{
    return self.indexOf(item)=== index;
  }
  let unique = props.items.cart.filter(uniqueItems);
  return (
    <Typography>
      Total Unique in the Cart: {unique.length}
    </Typography>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

export default connect(mapStateToProps)(CartUniqueItems);