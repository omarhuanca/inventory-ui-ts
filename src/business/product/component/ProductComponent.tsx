import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { ProductAPI } from '../dto/ProductAPI';

interface Props {
  product: ProductAPI;
}

const ProductCard: React.FC<Props> = ({ product })  => {
  return ( 
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          //image="/assets/defaultImageProduct.jpg"
          image={`data:image/jpeg;base64,${product.imageBase64}`}
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
          Precio {product.priceSale} {product.coin.code} / {product.measurement.code}
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;