import {combineReducers} from 'redux';

const INITIAL_STATE = {
  cart : [],
  allItems : [
    {id:1, name:'Alice', price:25, quantity:1}, {id:2, name:'Bob',price:26, quantity:1}, {id:3, name:'Sammy',price:28, quantity:1}, {id:4, name:'Olivia',price:30, quantity:1}, 
    // 'Alice', 'Bob', 'Sammy', 'Olivia', 
    // 'Emma', 'Ava', 'Charlotte', 'Sophia',
    // 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Liam	', 'Noah	', 'Oliver	',
    // 'Elijah	', 'William	', 'James	', 'Benjamin', 'Lucas	', 'Henry	', 'Alexander',
  ],
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
        }        
        break;
      }
      else{
        return {        
          ...state,
          cart:[...state.cart, addedItem]
        }        
        break;
      }
    break;    

    case 'REMOVE_ITEM':
    const removedItem = state.cart.find(item => item.name === action.payload.name);
    if(removedItem && removedItem.quantity>0){
      return{
        ...state,
        cart: state.cart.map(item => item.name === removedItem.name ? {...removedItem, quantity: removedItem.quantity -1} : item),
      }
      break;
    }else if(removedItem && removedItem.quantity ===0){
      return{
      ...state,
      cart: state.cart.filter(cartItem => cartItem !== removedItem)
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
      cart: []
    }    
    break;

    // case 'IN_CART':
    // const findItem = state.cart.find(item => item === action.payload)
console.log(state.cart)
/**** */
    default:
      return state;
      break;
    }
}//itemsReducer

export default combineReducers({
  items: itemsReducer //exporting itemsReducer as a property called items.
});