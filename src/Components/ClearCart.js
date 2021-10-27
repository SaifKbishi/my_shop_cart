import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCart } from '../Pages/ItemsActions';
import { Button} from '@mui/material/';

const ClearCart = (props) => {
  return (
    <div>
      <Button variant="contained" color="error" style={{ margin:'3px 0px'}} 
        onClick={()=>{props.clearCart(); }}        
      >Delete all items from Cart</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClearCart);