import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem} from '../Pages/ItemsActions'
import { Typography, Button} from '@mui/material/';

const ItemsScreen = (props) => {
  return (
    <div>
      {props.items.allItems.map((item, index)=>{        
        return(        
          <Button key={index} style={{backgroundColor:'#333', margin:'3px'}} 
            onClick={()=>{props.addItem(item)}}
            >Add {item}</Button>        
        )
      })}
    </div>
  );
};


const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const mapDispatchToProps = (dispatch) =>(
   bindActionCreators({addItem, 
   }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ItemsScreen);
