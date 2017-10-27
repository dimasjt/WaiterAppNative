import React, { Component } from "react"
import { Alert } from "react-native"
import {
  Content,
} from "native-base"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

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

AddProductScreen.propTypes = {
  createProduct: PropTypes.func.isRequired,
}

export default graphql(CREATE_PRODUCT, {
  props: ({ mutate }) => ({
    createProduct(product) {
      mutate({ variables: { product } }).then(() => {
        Alert.alert("Success", "Successfully created product.")
      }).catch((err) => {
        Alert.alert("Error", err.message)
      })
    },
  }),
})(AddProductScreen)
