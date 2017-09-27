import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import {
  Button,
  Form,
  Item,
  Input,
  Grid,
  Col,
  Text,
} from "native-base"

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
        <Grid>
          <Col>
            <Button full onPress={() => this.props.navigation.navigate("MainDrawer")}>
              <Text>Login</Text>
            </Button>
          </Col>
          <Col>
            <Button full onPress={() => this.props.navigation.navigate("Register")}>
              <Text>Register</Text>
            </Button>
          </Col>
        </Grid>
      </Form>
    )
  }
}

const style = StyleSheet.create({

})