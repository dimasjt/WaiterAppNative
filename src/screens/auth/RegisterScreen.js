import React, { Component } from "react"
import {
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base"

class RegisterScreen extends Component {
  render() {
    return (
      <Form>
        <Item>
          <Input placeholder="First Name" />
        </Item>
        <Item>
          <Input placeholder="Last Name" />
        </Item>
        <Item>
          <Input placeholder="Email" />
        </Item>
        <Item>
          <Input placeholder="Phone" />
        </Item>
        <Item>
          <Input placeholder="Phone" />
        </Item>
        <Button full onPress={() => this.props.navigation.navigate("Login")}>
          <Text>REGISTER</Text>
        </Button>
      </Form>
    )
  }
}

export default RegisterScreen
