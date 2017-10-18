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

const image = "http://www.agrowindo.com/wp-content/uploads/2017/05/bebek-presto-sambal-ijo.png"

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
        <Left>
          <Thumbnail small source={{ uri: image }} />
        </Left>
        <Body>
          <Text>{product.name}</Text>
        </Body>
        <Right>
          <Button small>
            <Text>-</Text>
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
