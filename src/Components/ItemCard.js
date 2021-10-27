import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ItemCard({title, img}) {

  return (
    <Card sx={{ maxWidth: 345, minHeight: 320 }}>
      <CardHeader  
        title={title}
        sx={{fontSize : '1.1rem', height: '70px'}}
      />
      <CardMedia
        component="img"
        height="120"
        image={img}
        alt={title}        
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>  
    </Card>
  );
}
