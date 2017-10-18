import React from "react"
import {
  addNavigationHelpers,
  StackNavigator,
  DrawerNavigator,
  TabNavigator,
  DrawerItems,
} from "react-navigation"
import { View, Text, Button } from "native-base"
import { connect } from "react-redux"
import { AsyncStorage } from "react-native"

import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import SettingScreen from "../screens/SettingScreen"
import ListProductsScreen from "../screens/ListProductsScreen"
import AddProductScreen from "../screens/AddProductScreen"

const CustomDrawerItems = (props) => (
  <View>
    <DrawerItems {...props} />
    <Button onPress={async () => {
      await AsyncStorage.removeItem("token")
      props.navigation.navigate("Login")
    }}
    >
      <Text>
        Logout
      </Text>
    </Button>
  </View>
)

const MainDrawer = DrawerNavigator({
  Product: {
    screen: StackNavigator({
      ListProducts: { screen: ListProductsScreen },
      AddProduct: { screen: AddProductScreen },
    }),
  },
  Setting: {
    screen: SettingScreen,
  },
}, {
  contentComponent: CustomDrawerItems,
})

export const AppNavigator = TabNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Main: {
    screen: MainDrawer,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
}, {
  initialRouteName: "Login",
  animationEnabled: false,
  swipeEnabled: false,
  tabBarPosition: "bottom",
})

const AppWithNavigationState = ({ dispatch, nav, auth }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = (state) => ({
  nav: state.nav,
  auth: state.auth,
})

export default connect(mapStateToProps)(AppWithNavigationState)
