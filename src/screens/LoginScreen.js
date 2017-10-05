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
import { NavigationActions } from "react-navigation"

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: "MainDrawer" }),
  ],
})

class LoginScreen extends Component {
  constructor() {
    super()

    this.state = {
      email: "rick@mailinator.com",
      password: "letmein123!",
    }
  }
  login = () => {
    this.props.navigation.dispatch(resetAction)
    // const user = { email: "", password: "", ...this.state }
    // this.props.mutate({ variables: { user } }).then(({ data }) => {
    //   if (data.login.token) {
    //     // AsyncStorage.setItem("token", data.login.token)
    //     debugger
    //     this.props.navigation.navigate("MainDrawer")
    //     Alert.alert("Alert", data.login.token)
    //   }
    // }).catch(() => {
    //   Alert.alert("Alert", "Invalid email or password")
    // })
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
