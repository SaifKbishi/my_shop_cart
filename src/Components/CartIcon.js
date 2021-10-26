import React from 'react';
import { connect } from 'react-redux';
import { Typography} from '@mui/material/';
// import { makeStyles } from '@material-ui/core/styles';

const CartIcon = (props) => {
 
  return (
    <div >
      <Typography sx={{ fontSize:'20px', padding:'0 2px' }}>
        {props.items.cart.reduce((a, item)=>{
          return a + item.quantity
        },0)}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

export default connect(mapStateToProps)(CartIcon);