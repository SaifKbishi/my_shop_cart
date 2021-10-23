import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const InCartItemCard = ({title, img}) => {
const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 890, minHeight: 170 }} className={classes.basketCard}>
      <CardMedia
        component="img"
        height="120"        
        image={img}
        alt={title}        
        sx={{objectFit: 'contain', maxWidth:'200px'}}
      />
      <CardHeader  
        title={title}
        sx={{fontSize : '1.1rem', height: '70px', width:'750px'}}
      />
    </Card>
  );
}

const useStyles = makeStyles({
  basketCard:{
    display:'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});


export default InCartItemCard;