import React, { Component } from "react"
import {
  Content,
} from "native-base"
import { graphql } from "react-apollo"

import ProductForm from "../components/forms/ProductForm"

import { CREATE_PRODUCT } from "../mutations"

class AddProductScreen extends Component {
  static navigationOptions = {
    title: "Add New Product",
  }

  render() {
    return (
      <Content>
        <ProductForm onSubmit={this.props.createProduct} />
      </Content>
    )
  }
}

export default graphql(CREATE_PRODUCT, {
  props: ({ mutate }) => ({
    createProduct(product) {
      console.log(product)
    },
  }),
})(AddProductScreen)
