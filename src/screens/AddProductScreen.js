import React, { Component } from "react"
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Content,
} from "native-base"

class AddProductScreen extends Component {
  static navigationOptions = {
    title: "Add New Product",
  }

  render() {
    return (
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Price</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>SKU</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Category</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Description</Label>
            <Input multiline numberOfLines={4} />
          </Item>
          <Button full>
            <Text>Save</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

export default AddProductScreen
