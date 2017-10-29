import React, { Component } from "react"
import { StyleSheet, Alert } from "react-native"
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Text,
  Body,
  Right,
  Button,
  Spinner,
} from "native-base"
import { graphql, compose } from "react-apollo"
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import { DELETE_PRODUCT } from "../mutations"

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  btnLeft: {
    marginLeft: 10,
  },
  btnRight: {
    marginRight: 10,
  },
})

class ListProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "List Products",
    headerLeft: (
      <Button transparent onPress={() => navigation.navigate("DrawerOpen")} style={styles.btnLeft}>
        {<Icon name="menu" size={30} />}
      </Button>
    ),
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("AddProduct")} style={styles.btnRight}>
        {<Icon name="plus" size={30} />}
      </Button>
    ),
  })

  handleDelete(id) {
    const deleteProduct = this.props.deleteProduct

    const actions = [
      {
        text: "YES", onPress() { deleteProduct(id) },
      },
      { text: "CANCEL", onPress() { } },
    ]

    Alert.alert("Alert", "Are you sure want to delete this product?", actions)
  }

  renderThumb(product) {
    if (product.image.thumb) {
      return (
        <Thumbnail
          small
          source={{ uri: product.image.thumb }}
          style={{ width: 50, height: 50 }}
        />
      )
    }

    return null
  }

  render() {
    const { products, loading } = this.props.data

    const listItems = (product) => (
      <ListItem avatar style={styles.wrapper} key={product.id}>
        <Left>
          {this.renderThumb(product)}
        </Left>
        <Body>
          <Text>{product.name}</Text>
          <Text>{product.price.human}</Text>
        </Body>
        <Right>
          <Button small rounded onPress={() => this.handleDelete(product.id)}>
            {<Icon name="minus" size={30} color="black" />}
          </Button>
        </Right>
      </ListItem>
    )

    if (loading) {
      return <Spinner />
    }

    return (
      <List
        dataArray={products}
        renderRow={listItems}
      />
    )
  }
}

ListProductsScreen.propTypes = {
  data: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
}

export default compose(
  graphql(GET_PRODUCTS),
  graphql(DELETE_PRODUCT, {
    props: ({ ownProps, mutate }) => ({
      deleteProduct(id) {
        mutate({ variables: { id } }).then(() => {
          Alert.alert("Info", "Success delete product.")
          ownProps.data.refetch()
        })
      },
    }),
  }),
)(ListProductsScreen)
