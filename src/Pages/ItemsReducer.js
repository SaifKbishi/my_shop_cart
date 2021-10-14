import {combineReducers} from 'redux';

const INITIAL_STATE = {
  cart : [],
  allItems : [
    'Alice', 'Bob', 'Sammy', 'Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia',
    'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Liam	', 'Noah	', 'Oliver	',
    'Elijah	', 'William	', 'James	', 'Benjamin', 'Lucas	', 'Henry	', 'Alexander',
  ],
}

const itemsReducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
    case 'ADD_ITEM':
    const addedItem = state.allItems.find(item => item === action.payload);
    if(addedItem){
      return{        
          ...state,
          cart:[...state.cart, addedItem]
        }
        break;
      }else{
        return state
        console.log('no such item')
        break;
      }
    break;

    case 'REMOVE_ITEM':
    const removedItem = state.cart.find(item => item === action.payload);
    if(removedItem){
      return{
        ...state
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

/**** */
    default:
      return state;
      break;
    }
}//itemsReducer

export default combineReducers({
  items: itemsReducer //exporting itemsReducer as a property called items.
});