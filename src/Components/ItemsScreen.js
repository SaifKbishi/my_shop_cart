import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem} from '../Pages/ItemsActions';
import { Typography, Button, ButtonGroup} from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './ItemCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemsScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.speComponent} >
      {props.items.allItems.map((item, index)=>{
        return(
          <div className={classes.anItem} key={index}>
            <ItemCard title={item.name} img={item.img}/>
            <div className={classes.qtyBtns}>
              <Typography variant="p" display="inline">Price: {item.price} $</Typography> 
              <ButtonGroup variant="outlined" aria-label="text button group" key={index+item}>            
              {/* <Button style={{backgroundColor:'#333', margin:'3px 0px'}} 
                onClick={()=>{props.removeItem(item)}}
                key={index+item}
                >-</Button> */}
              <Button style={{backgroundColor:'#333', margin:'3px 0px'}} 
                onClick={()=>{props.addItem(item)}}
                key={index+item+item}
                >
                {/* + */}
                <AddShoppingCartIcon/>
                </Button>            
              </ButtonGroup>
            </div>
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
    margin: '105px 10px',
    transition: '0.5s',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  anItem:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0px 5px',
    padding: '10px',
  },
  qtyBtns:{
    display:'flex',
    justifyContent:'space-around'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsScreen);
