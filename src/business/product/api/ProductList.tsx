import {useEffect, useState} from 'react';
import ProductClient from './ProductClient';
import ProductComponent from '../component/ProductComponent';
import Box from '@mui/material/Box';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        ProductClient.get('v1/products')
          .then(response => {
            setProducts(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message || 'Unknow error');
            setLoading(false);
          })
    }, []);

    if (loading)
      return <>Loading products....</>
    if (error)
      return <>Error: {error}</>

    return (
        <>
          <h1>Productos</h1>
          <Box sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            gap: 2,
          }}>
            {products.map(product => (
              <ProductComponent key={product.code} product={product} />
            ))}
          </Box>
        </>
    )
};

export default ProductList;
