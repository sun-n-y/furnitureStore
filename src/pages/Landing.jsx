import { FeaturedProducts, Hero } from '../components';
import authFetch from '../utils/index';

const url = '/products?featured=true';

export const loader = (queryClient) => async () => {
  const response = await authFetch(url);
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
