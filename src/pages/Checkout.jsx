import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => () => {
  //grab user from the store
  const user = store.getState().userState.user;
  if (!user) {
    toast.warning('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);

  if (cartItems === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
