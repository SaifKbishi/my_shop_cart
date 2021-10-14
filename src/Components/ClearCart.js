import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCart } from '../Pages/ItemsActions';
import { Typography, Button, ButtonGroup} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';

const ClearCart = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="error" style={{ margin:'3px 0px'}} 
        onClick={()=>{props.clearCart(); }}        
      >Clear Cart</Button>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const mapDispatchToProps = (dispatch) =>(
   bindActionCreators({clearCart, 
   }, dispatch)
)

const useStyles = makeStyles({  

});

export default connect(mapStateToProps, mapDispatchToProps)(ClearCart);