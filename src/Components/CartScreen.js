import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem} from '../Pages/ItemsActions';
import { Typography, ButtonGroup, Button} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import ClearCart from './ClearCart';
import CartUniqueItems from './CartUniqueItems';
import ItemCard from './ItemCard';
import CartIcon from './CartIcon'
import InCartItemCard from './InCartItemCard';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.speComponent}>
    <CartUniqueItems/>
    <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
    <Typography variant="h4" gutterBottom className={classes.cartSum}>
      <ClearCart/>
      <div className={classes.subTotal}>
      Subtotal ( {<CartIcon /> }  items): 
      {props.items.totalPrice} $
      </div>
    </Typography>
    
      {props.items.cart.map((item, index)=>{  
        console.log(props.items.totalPrice)      
        return(
          <div className={classes.itemsInCart} key={index}>
            <InCartItemCard title={item.name} img={item.img} />
            {/* <ItemCard title={item.name} img={item.img}/> */}
            <div className={classes.inCartControls}>
              <Typography variant="p" display="inline">Quantity: {item.quantity} </Typography>
              <Typography variant="p" display="inline">Price: {item.quantity * item.price} $</Typography> 
                <div className={classes.qtyBtns}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=>{props.removeItem(item)}}
                    color="inherit"
                    flexGrow='1'
                  >
                  -
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=>{props.addItem(item)}}
                    color="inherit"
                    flexGrow='1'
                  >
                  +
                  </IconButton>
                </div>
              </div>
          </div>
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

const mapDispatchToProps = (dispatch) =>(
   bindActionCreators({addItem, removeItem
   }, dispatch)
)

const useStyles = makeStyles({
  itemsInCart: {
    width: '80%',
    margin: '5px 10px',
    padding: '3px',
    boxSizing: "border-box",
    display:'flex'
  },
  speComponent:{
    margin: '5px 10px',
  },
  basketCard:{
    display:'flex'
  },
  inCartControls:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  qtyBtns:{
    display:'flex',
    justifyContent:'space-around',    
  },
  subTotal:{
    display:'flex',
    
  },
  cartSum:{
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '20px'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

