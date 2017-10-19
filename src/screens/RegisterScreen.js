import React, { Component } from "react"
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Grid,
  Col,
  H1,
  View,
} from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  heading: {
    textAlign: "center",
    marginBottom: 60,
  },
})

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register",
    tabBarVisible: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <H1 style={styles.heading}>Register</H1>
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
          <Grid>
            <Col>
              <Button full onPress={() => { }}>
                <Text>REGISTER</Text>
              </Button>
            </Col>
            <Col>
              <Button full info onPress={() => this.props.navigation.navigate("Login")}>
                <Text>Login</Text>
              </Button>
            </Col>
          </Grid>
        </Form>
      </View>
    )
  }
}

export default RegisterScreen
