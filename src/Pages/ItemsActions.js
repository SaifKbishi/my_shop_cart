export const addItem = itemName =>(
  {
    type: 'ADD_ITEM',
    payload: itemName //data we are sending
  }
);

export const removeItem = itemName =>(
  {
    type: 'REMOVE_ITEM',
    payload: itemName //data we are sending
  }
);