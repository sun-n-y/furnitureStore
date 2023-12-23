import { useEffect } from 'react';
import { Hero } from '../components';
import authFetch from '../utils';

const Landing = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/products');
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
