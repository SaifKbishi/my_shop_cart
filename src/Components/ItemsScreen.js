import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem} from '../Pages/ItemsActions'
import { Typography, Button, ButtonGroup} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './ItemCard'

const ItemsScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.speComponent}>
    {/* <Typography variant="h4" gutterBottom>Items you can add to Cart</Typography>
    <Typography variant="h6" gutterBottom>number of item can be added: {props.items.allItems.length}</Typography> */}
      {props.items.allItems.map((item, index)=>{
        return(
          <div className={classes.anItem} key={index}>
          
            {/* <div >
            <Button key={index} style={{backgroundColor:'#333', margin:'3px'}} 
              onClick={()=>{props.addItem(item)}}
              >Add {item.name}</Button>
            </div> */}

            <ItemCard title={item.name}/>

            <ButtonGroup variant="outlined" aria-label="text button group" key={index+item}>            
            <Button style={{backgroundColor:'#333', margin:'3px 0px'}} 
              onClick={()=>{props.removeItem(item)}}
              key={index+item}
              >-</Button>
            <Button style={{backgroundColor:'#333', margin:'3px 0px'}} 
              onClick={()=>{props.addItem(item)}}
              key={index+item+item}
              >+</Button>            
            </ButtonGroup>
          </div>
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
   bindActionCreators({addItem, removeItem
   }, dispatch)
)

const useStyles = makeStyles({  
  speComponent:{
    border: `2px solid red`,
    margin: '5px 10px',
    // width: '450px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  anItem:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0px 5px',
    padding: '10px',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsScreen);
