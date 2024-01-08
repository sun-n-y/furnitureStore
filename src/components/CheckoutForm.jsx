import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

export const action = (store) => async () => {
  console.log(store);
  return null;
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="felx flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="PLACE YOUR ORDER" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
