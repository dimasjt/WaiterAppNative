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
} from "native-base"

const image = "http://www.agrowindo.com/wp-content/uploads/2017/05/bebek-presto-sambal-ijo.png"

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 0,
    paddingLeft: 0,
  },
})

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const IndexProductScreen = () => {
  const listItems = items.map((item) => (
    <ListItem avatar style={styles.wrapper} key={item}>
      <Left>
        <Thumbnail source={{ uri: image }} />
      </Left>
      <Body>
        <Text>Bebek Ijo</Text>
        <Text>Bebek Ijo</Text>
      </Body>
      <Right>
        <Text note>10:10</Text>
      </Right>
    </ListItem>
  ))

  return (
    <List>{listItems}</List>
  )
}

export default IndexProductScreen
