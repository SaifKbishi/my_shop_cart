import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';


const CartIcon = (props) => {
  const classes = useStyles();
  return (
    <Typography className={classes.speComponent}>
      Total items in the Cart: {props.items.cart.length}
    </Typography>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const useStyles = makeStyles({  
  speComponent:{
    border: `2px solid red`,
    margin: '5px 10px',
  }
});

export default connect(mapStateToProps)(CartIcon);