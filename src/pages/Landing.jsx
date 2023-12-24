import { useEffect } from 'react';
import { Hero } from '../components';
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
    </>
  );
};

export default Landing;
