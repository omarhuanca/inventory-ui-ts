import {useEffect, useState} from 'react';
import ProductClient from './ProductClient';
import ProductComponent from '../component/ProductComponent';
import Box from '@mui/material/Box';
import { ProductAPI } from '../dto/ProductAPI';


const ProductList = () => {
    const [products, setProducts] = useState<ProductAPI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        ProductClient.get<ProductAPI[]>('v1/products')
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
      return <div className="p-6">Loading products....</div>
    if (error)
      return <div className="p-6 text-red-600">Error: {error}</div>

    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6">Productos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Box sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
              gap: 2,
            }}>
              {products.map((product, index) => (
                <ProductComponent key={index} product={product} />
              ))}
            </Box>
          </div>
        </div>
    )
};

export default ProductList;
