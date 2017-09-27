import React from "react"
import { DrawerNavigator } from "react-navigation"

// import ProductScreen from "../components/screens/main/ProductScreen"
import ProductTab from "./ProductTab"

const MainDrawer = DrawerNavigator({
  Product: {
    screen: ProductTab,
  },
})

export default MainDrawer
