import React from 'react';
import { connect } from 'react-redux';
import { Typography} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import ClearCart from './ClearCart';
import CartUniqueItems from './CartUniqueItems';

const CartScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.speComponent}>
    <CartUniqueItems/>
    <Typography variant="h4" gutterBottom>Items in the Cart</Typography>      
      {props.items.cart.map((item, index)=>{        
        return(
          <div className={classes.itemsInCart} key={index}>
          <Typography variant="h6" >{item.name} qty:{item.quantity}</Typography>
          </div>
        )
      })
      }
      
      <ClearCart/>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const useStyles = makeStyles({
  itemsInCart: {
    width: '150px',
    backgroundColor: "#44014C",
    margin: '5px 10px',
    padding: '3px',
    boxSizing: "border-box",
  },
  speComponent:{
    // border: `2px solid #FFF`,
    margin: '5px 10px',
    // width: '450px'
  }
});

export default connect(mapStateToProps)(CartScreen);

