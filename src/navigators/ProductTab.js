import React from "react"
import { TabNavigator } from "react-navigation"

import IndexProductScreen from "../components/screens/products/IndexProductScreen"
import AddProductScreen from "../components/screens/products/AddProductScreen"

const ProductTab = TabNavigator({
  IndexProduct: {
    screen: IndexProductScreen,
  },
  AddProduct: {
    screen: AddProductScreen,
  },
}, {
  tabBarPosition: "bottom"
})

export default ProductTab
