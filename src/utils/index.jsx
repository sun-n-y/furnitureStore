import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export default authFetch;

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

//
export const getLayoutType = () => {
  const comfyLayout = localStorage.getItem('comfyLayoutType');
  const newLayout = comfyLayout ? comfyLayout : 'grid';
  return newLayout;
};
