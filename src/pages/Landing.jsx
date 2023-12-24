import { FeaturedProducts, Hero } from '../components';
import authFetch from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
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
