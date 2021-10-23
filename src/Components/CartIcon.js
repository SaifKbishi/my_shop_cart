import React from 'react';
import { connect } from 'react-redux';
import { Typography} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';


const CartIcon = (props) => {
  // console.log('props: ', props)
  const classes = useStyles();
 
  return (
    // <div className={classes.speComponent}>
    <div >
      <Typography >
        {/* Total items in the Cart:  */}
        {props.items.cart.reduce((a, item)=>{
          return a + item.quantity
        },0)}
      </Typography>      
      {/* <Typography>
        Total Price: {props.items.totalPrice} $
      </Typography> */}
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const useStyles = makeStyles({  
  speComponent:{
    // border: `2px solid red`,
    margin: '5px 10px',
  }
});

export default connect(mapStateToProps)(CartIcon);