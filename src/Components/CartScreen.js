import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem} from '../Pages/ItemsActions';
import { Typography} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import ClearCart from './ClearCart';
import CartUniqueItems from './CartUniqueItems';
import ItemCard from './ItemCard';
import CartIcon from './CartIcon'
import InCartItemCard from './InCartItemCard';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.speComponent}>
    <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
    <Typography gutterBottom className={classes.cartSum}>
      <ClearCart/>
      <div className={classes.subTotal}>
        Subtotal ( {<CartIcon /> }  items):  
        {props.items.totalPrice} $
      </div>
    </Typography>
    <Typography className={classes.cs_unqitms}>
      <CartUniqueItems />
    </Typography>
    
      {props.items.cart.map((item, index)=>{
        return(
          <div className={classes.itemsInCart} key={index}>
            <InCartItemCard title={item.name} img={item.img} />
            <div className={classes.inCartControls}>
              <Typography variant="p" display="inline">Quantity: {item.quantity} </Typography>
              <Typography variant="p" display="inline">Price: {item.quantity * item.price}$</Typography> 
                <div className={classes.qtyBtns}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=>{props.removeItem(item)}}
                    color="inherit"
                    flexgrow='1'
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
                    flexgrow='1'
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
    margin: '105px 10px',
    display: 'flex',
    flexDirection: 'column'
  },
  basketCard:{
    display:'flex'
  },
  inCartControls:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    padding: '10px',
  },
  qtyBtns:{
    display:'flex',
    justifyContent:'space-around',    
  },
  subTotal:{
    display:'flex',
    fontSize: '20px', 
  },
  cartSum:{
    display: 'flex',
    justifyContent: 'space-between',    
  },
  cs_unqitms:{
    alignSelf:'flex-end',

  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

