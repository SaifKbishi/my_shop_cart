import React from 'react';
import { connect } from 'react-redux';
import { Typography} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';

const CartUniqueItems = (props) => {
  const classes = useStyles();
  const uniqueItems = (item, index, self)=>{
    return self.indexOf(item)=== index;
  }
  let unique = props.items.cart.filter(uniqueItems);
  return (
    <Typography className={classes.speComponent}>
      Total Unique in the Cart: {unique.length}
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

export default connect(mapStateToProps)(CartUniqueItems);