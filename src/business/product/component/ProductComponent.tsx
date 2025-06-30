import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="src/assets/defaultImageProduct.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {product.code}
        </Typography>
        <Typography variant="h5" component="div">
          {product.description}
        </Typography>
        <Typography variant="body2">
          {product.priceSale} {product.coin.code}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          disponible {product.stock} {product.measurement.code} 
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
