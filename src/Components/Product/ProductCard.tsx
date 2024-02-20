import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './ProductCard.scss'

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {

  return (
    <Card sx={{ width: 300, height: 300}}>
      <CardMedia
        component="img"
        alt="product-card"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography style={{color: '#474F7A'}} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {` $ ${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color: 'white', background: '#83C0C1'}} size="small">
          Add Cart
         </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
