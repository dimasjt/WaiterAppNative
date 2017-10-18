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

import { GET_PRODUCTS } from "../queries"

const image = "http://www.agrowindo.com/wp-content/uploads/2017/05/bebek-presto-sambal-ijo.png"

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 0,
    paddingLeft: 0,
  },
})

class IndexProductScreen extends Component {
  static navigationOptions = {
    title: "List Products",
  }

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

export default graphql(GET_PRODUCTS)(IndexProductScreen)
