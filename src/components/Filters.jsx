import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Search Products"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* SORT BY */}
      <FormSelect
        label="Sort By"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* PRICE RANGE */}
      <FormRange name="price" label="Select Price" size="range-sm" />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
