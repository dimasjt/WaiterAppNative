import React, { Component } from "react"
import { StyleSheet } from "react-native"
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
import { graphql } from "react-apollo"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import { GET_PRODUCTS } from "../queries"

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
        <Icon name="menu" size={30} />
      </Button>
    ),
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("AddProduct")} style={styles.btnRight}>
        <Icon name="plus" size={30} />
      </Button>
    ),
  })

  render() {
    const { products, loading } = this.props.data

    const listItems = (product) => (
      <ListItem avatar style={styles.wrapper} key={product.id}>
        <Thumbnail small source={{ uri: product.image.thumb }} style={{ width: 30, height: 30 }} />
        <Body>
          <Text>{product.name}</Text>
          <Text>{product.price.human}</Text>
        </Body>
        <Right>
          <Button small rounded>
            <Icon name="minus" size={30} color="black" />
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

export default graphql(GET_PRODUCTS)(ListProductsScreen)
