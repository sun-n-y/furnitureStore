import { FeaturedProducts, Hero } from '../components';
import authFetch from '../utils/index';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featured products'],
  queryFn: () => authFetch(url),
};

export const loader = (queryClient) => async () => {
  //if query is in cache, grab data; else make new request
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
