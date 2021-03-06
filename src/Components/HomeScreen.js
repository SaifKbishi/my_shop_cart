import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import ItemsScreen from './ItemsScreen';
import CartScreen from './CartScreen';
import { makeStyles } from '@material-ui/core/styles';

const HomeScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.HomeScreenDiv}>
    <Router>
      <NavBar/>
      <Route path="/" exact component={ItemsScreen} />      
      <Route path="/allitems" component={ItemsScreen} />
      <Route path="/cart" component={CartScreen} />
    </Router>
    </div>
  );
};

const mapStateToProps = (state)=>{
  const {items} = state
  return {items}
};

const useStyles = makeStyles({  
  itemsAndCart:{
    display:'flex',
    flexDirection: 'column'
  },
  HomeScreenDiv:{
    width: '100%',
  }
});

export default connect(mapStateToProps)(HomeScreen);
