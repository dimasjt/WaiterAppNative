import React from "react"
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
  Icon,
  Spinner,
} from "native-base"
import { graphql } from "react-apollo"

import { GET_PRODUCTS } from "../../queries"

const image = "http://www.agrowindo.com/wp-content/uploads/2017/05/bebek-presto-sambal-ijo.png"

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 0,
    paddingLeft: 0,
  },
})

const IndexProductScreen = ({ data }) => {
  const { products, loading } = data

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
          <Icon name="ios-minus" />
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

export default graphql(GET_PRODUCTS)(IndexProductScreen)
