import React from "react"
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
} from "native-base"
import { reduxForm } from "redux-form"
import { graphql } from "react-apollo"

import SelectField from "../fields/SelectField"
import TextField from "../fields/TextField"

import { GET_CATEGORIES } from "../../queries"

const ProductForm = ({ handleSubmit, data }) => {
  const categories = data.categories || []

  return (
    <Form>
      <TextField name="name" label="Name" />
      <TextField name="price" label="Price" />
      <TextField name="sku" label="SKU" />
      <TextField name="description" label="Description" multiline />
      <SelectField
        name="category_id"
        placeholder="Select Category"
        options={categories}
      />
      <Button full onSubmit={handleSubmit}>
        <Text>Save</Text>
      </Button>
    </Form>
  )
}

const ConnectGraphQL = graphql(GET_CATEGORIES)(ProductForm)

export default reduxForm({
  form: "product",
})(ConnectGraphQL)
