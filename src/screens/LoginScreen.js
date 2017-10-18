import React, { Component } from "react"
import { StyleSheet, Alert, AsyncStorage } from "react-native"
import {
  Button,
  Form,
  Item,
  Input,
  Grid,
  Col,
  Text,
  View,
  H1,
} from "native-base"
import { graphql, gql } from "react-apollo"
import { connect } from "react-redux"
import { NavigationActions } from "react-navigation"

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: "SignedIn" }),
  ],
})

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  heading: {
    textAlign: "center",
    marginBottom: 60,
  },
})

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login",
    tabBarVisible: false,
  }

  state = { email: "", password: "" }

  async componentWillMount() {
    const token = await AsyncStorage.getItem("token")
    if (token !== null) {
      this.props.navigation.navigate("Main")
    }
  }
  login = () => {
    const user = { email: "", password: "", ...this.state }
    this.props.mutate({ variables: { user } }).then(({ data }) => {
      if (data.login.token) {
        AsyncStorage.setItem("token", data.login.token)
        this.props.navigation.navigate("Main")
      } else {
        Alert.alert("Alert", "Invalid email or password")
      }
    }).catch(() => {
      Alert.alert("Alert", "Invalid email or password")
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <H1 style={styles.heading}>WaiterApp</H1>
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
                <Text>Login</Text>
              </Button>
            </Col>
            <Col>
              <Button full info onPress={() => this.props.navigation.navigate("Register")}>
                <Text>Register</Text>
              </Button>
            </Col>
          </Grid>
        </Form>
      </View>
    )
  }
}

const Connected = connect((state) => state)(LoginScreen)

const LOGIN = gql`
  mutation login($user: Auth!) {
    login(user: $user) {
      token
    }
  }
`

export default graphql(LOGIN)(Connected)
