import { useLoaderData } from 'react-router-dom';
import authFetch, { formatPrice } from '../utils';

export const loader = async ({ params }) => {
  const response = await authFetch(`/products/${params.id}`);

  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return <></>;
};

export default SingleProduct;
