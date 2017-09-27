import React from "react"
import { TabNavigator } from "react-navigation"

import IndexProductScreen from "../screens/products/IndexProductScreen"
import AddProductScreen from "../screens/products/AddProductScreen"

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
