import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Button, Form, Item, Input } from "native-base"

export default class LoginScreen extends Component {
  render() {
    return (
      <Form>
        <Item>
          <Input placeholder="Email" />
        </Item>
        <Item>
          <Input placeholder="Password" />
        </Item>
        <Button full onPress={() => this.props.navigation.navigate("MainDrawer")}>
          <Text>
            Login
          </Text>
        </Button>
      </Form>
    )
  }
}

const style = StyleSheet.create({

})
