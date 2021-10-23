import {combineReducers} from 'redux';
import data from '../Files/data';

const INITIAL_STATE = {
  cart : [],
  allItems : data.productsData,
  // [
  //   {id:1, name:'3-Piece Reversible Rustic Lodge Bedspread Quilt', price:25, quantity:1}, 
  //   {id:2, name:'12x25 Compact Binoculars',price:20, quantity:1}, 
  //   {id:3, name:'12x42 HD Binoculars for Adults with Universal Phone Adapter',price:30, quantity:1}, 
  //   {id:4, name:'BalanceFrom GoYoga',price:50, quantity:1}, 
  //   {id:1, name:'Bear Deer Elk Pillow', price:25, quantity:1}, 
  //   {id:2, name:'Beek NOAA Emergency Radio',price:20, quantity:1}, 
  //   {id:3, name:'GearLight LED Tactical Flashlight',price:30, quantity:1}, 
  //   {id:4, name:'Hydration Backpack with 3L TPU Water Bladder',price:50, quantity:1}, 
  //   {id:4, name:'Life Is Better At The Cabin',price:50, quantity:1}, 
  //   {id:4, name:'Lodge Bedspread King Size Quilt',price:50, quantity:1}, 
  //   {id:4, name:'Perfotek Waist Trimmer Belt',price:50, quantity:1}, 
  //   {id:4, name:'Portable Folding Rocking Chair',price:50, quantity:1}, 
  //   {id:4, name:'Quilt - Bear Lake',price:50, quantity:1}, 
  //   {id:4, name:'Survival Gear and Equipment',price:50, quantity:1}, 
  //   {id:4, name:'Twin Quilt - Moonlit Bear',price:50, quantity:1},    
  // ],
  totalPrice:0
}

const itemsReducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
    
    case 'ADD_ITEM':
    const inCartItem = state.cart.find(item => item.name === action.payload.name);
    const addedItem = state.allItems.find(item => item.name === action.payload.name);
    if(inCartItem){ //if itme found in cart
      return{        //should update the counter
          ...state,
          cart: state.cart.map(item => item.name === inCartItem.name ? {...inCartItem, quantity:inCartItem.quantity +1} : item),
          totalPrice: state.totalPrice + action.payload.price,
        }        
        break;
      }
      else{
        return {        
          ...state,
          cart:[...state.cart, addedItem],
          totalPrice: state.totalPrice + action.payload.price,
        }        
        break;
      }
    break;    

    case 'REMOVE_ITEM':
    const removedItem = state.cart.find(item => item.name === action.payload.name);
    if(removedItem && removedItem.quantity>1){
      return{
        ...state,
        cart: state.cart.map(item => item.name === removedItem.name ? {...removedItem, quantity: removedItem.quantity -1} : item),
        totalPrice: state.totalPrice - action.payload.price,
      }
      break;
    }else if(removedItem && removedItem.quantity === 1){
      console.log('49: ', removedItem)
      return{
        ...state,
        cart: state.cart.filter(cartItem => cartItem.name !== removedItem.name),
        totalPrice: state.totalPrice - action.payload.price,
      }
    }
    else if(removedItem && removedItem.quantity === 0){
      console.log('49: ', removedItem)
      return{
        ...state,
        cart: state.cart.filter(cartItem => cartItem.name !== removedItem.name),
        totalPrice: state.totalPrice,
      }
    }
    else{
        return {        
          ...state,
          // cart:[...state.cart, removedItem]
        }        
        break;
      }
    break;
    
    case 'CLEAR_CART':
    return {
      ...state,
      cart: [],
      totalPrice:0
    }    
    break;

    // case 'IN_CART':
    // const findItem = state.cart.find(item => item === action.payload)

/**** */
    default:
      return state;
      break;
    }
}//itemsReducer

export default combineReducers({
  items: itemsReducer //exporting itemsReducer as a property called items.
});