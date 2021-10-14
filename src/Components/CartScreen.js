import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button} from '@mui/material/';

const CartScreen = (props) => {
  return (
    <div>
      CartScreen
      {props.items.cart.map((item, index)=>{
        return(
          <Typography variant="h6" className="itemsInCart" style={itemsInCart} >{item}</Typography>
        )
      })
      }
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const itemsInCart ={
  width: '150px',
  backgroundColor: "#44014C",
  margin: '5px 10px',
  padding: '3px',
  boxSizing: "border-box"
}

export default connect(mapStateToProps)(CartScreen);

