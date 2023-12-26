import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import { ProductsList } from '.';

const ProductsContainer = () => {
  const { products, meta } = useLoaderData();

  return (
    <>
      <ProductsGrid />
      <ProductsList />
    </>
  );
};

export default ProductsContainer;
