import React from "react"
import {
  Form,
  Button,
  Text,
} from "native-base"
import { reduxForm } from "redux-form"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

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
        label="Category"
      />
      <Button full onPress={handleSubmit}>
        <Text>Save</Text>
      </Button>
    </Form>
  )
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const ConnectGraphQL = graphql(GET_CATEGORIES)(ProductForm)

export default reduxForm({
  form: "product",
})(ConnectGraphQL)
