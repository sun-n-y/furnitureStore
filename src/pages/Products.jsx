import { Filters, PaginationContainer, ProductsContainer } from '../components';
import authFetch from '../utils';

export const loader = async ({ request }) => {
  const response = await authFetch('/products');
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
