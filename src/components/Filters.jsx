import { Form, useLoaderData, Link } from "react-router";
import { LabeledInput } from "./LabeledInput";
import { LabeledSelect } from "./LabeledSelect";

export const Filters = () => {
  const { productsMeta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <LabeledInput type="search" size="sm" labelText="Search Product" name="search" elemId="searchIpt" />
      {/* CATEGORIES */}
      <LabeledSelect
        labelText="Category"
        name="category"
        elemId="categorySlct"
        list={productsMeta.categories}
        size="sm"
      />
      {/* COMPANIES */}
      <LabeledSelect  
        labelText="Company"
        name="company"
        elemId="companySlct"
        list={productsMeta.companies}
        size="sm"
      />
      {/* ORDER */}
      <LabeledSelect 
        labelText="Sort by"
        elemId="sortSlct"
        name="order"
        list={["A-Z", "Z-A", "Higher price", "Lower price"]}
        size="sm"
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">Reset</Link>
    </Form>
  )
}