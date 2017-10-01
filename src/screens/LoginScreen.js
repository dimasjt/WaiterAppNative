import React, { Component } from "react"
import { View, StyleSheet, Alert, AsyncStorage } from "react-native"
import {
  Button,
  Form,
  Item,
  Input,
  Grid,
  Col,
  Text,
} from "native-base"
import { graphql, gql } from "react-apollo"
import { connect } from "react-redux"

class LoginScreen extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
    }
  }
  login = () => {
    const user = { email: "", password: "", ...this.state }
    this.props.mutate({ variables: { user } }).then(({ data }) => {
      if (data.login.token) {
        AsyncStorage.setItem("token", data.login.token)
        Alert.alert("Alert", data.login.token)
      }
    }).catch(() => {
      Alert.alert("Alert", "Invalid email or password")
    })
  }
  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
        </Item>
        <Grid>
          <Col>
            <Button full onPress={this.login}>
              <Text>Logins</Text>
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

const Connected = connect(state => state)(LoginScreen)

const LOGIN = gql`
  mutation login($user: Auth!) {
    login(user: $user) {
      token
    }
  }
`

export default graphql(LOGIN)(Connected)
