import {useEffect, useState} from 'react';
import ProductClient from './ProductClient';
import ProductComponent from '../component/ProductComponent';
import Box from '@mui/material/Box';
import { ProductAPI } from '../dto/ProductAPI';
import { TextField, InputAdornment, Typography, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    selectedLine: string;
};

const ProductList = ({ selectedLine }: Props) => {
    const [products, setProducts] = useState<ProductAPI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [query, setQuery] = useState("");

    useEffect(() => {
      if (selectedLine.trim() === "") {
        fetchProducts();
        return;
      }

      filterProductsByLine(selectedLine);
    }, [selectedLine]);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (query.trim() === "") {
          if (selectedLine.trim() === "") {
            fetchProducts();
            return;
          }

          filterProductsByLine(selectedLine);
        } else {
          searchProducts(query);
        }
      }, 400);

      return () => clearTimeout(timer);
    }, [query, selectedLine]);

    const fetchProducts = () => {
      setLoading(true);
      ProductClient.get<ProductAPI[]>("v1/products")
        .then((response) => {
          setProducts(response.data);
          setError(undefined);
        })
        .catch((error) => {
          setError(error.message || "Unknown error");
        })
        .finally(() => setLoading(false));
    };

    const searchProducts = (desc: string) => {
      setLoading(true);
      ProductClient.get<ProductAPI[]>("v1/products/searchByDescription", {
        params: { criteria: desc }
      })
        .then((response) => {
          setProducts(response.data);
          setError(undefined);
        })
        .catch((error) => {
          setError(error.message || "Unknown error");
        })
        .finally(() => setLoading(false));
    };

    const filterProductsByLine = (line: string) => {
      setLoading(true);
      ProductClient.get<ProductAPI[]>(`v1/products/filterByNameLine/${encodeURIComponent(line)}`)
        .then((response) => {
          setProducts(response.data);
          setError(undefined);
        })
        .catch((error) => {
          setError(error.message || "Unknown error");
        })
        .finally(() => setLoading(false));
    };


    if (loading)
      return <div className="p-6">Leendo productos .... </div>
    if (error)
      return <div className="p-6 text-red-600">Error: {error}</div>

    const productFilter = products.filter(product =>
      product.description.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container sx={{ mt: 4 }}>
          <Box mb={2}>
              <Typography variant="h5" component="h1" gutterBottom>
                Lista de Productos
              </Typography>
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar por descripción"
            value={query}
            onChange={e => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action"/>
                </InputAdornment>
              )
            }}
          />
          <Grid container spacing={3} sx={{ mt: 1, minHeight: '400px' }}>
            {productFilter.map((product, index) => (
              <Grid item key={index}>
                <ProductComponent key={index} product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
    )
};

export default ProductList;
