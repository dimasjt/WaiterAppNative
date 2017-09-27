import React from "react"
import {
  Form,
  Item,
  Input,
  Button,
  Text,
} from "native-base"

const AddProductScreen = () => {
  return (
    <Form>
      <Item>
        <Input placeholder="Name" />
      </Item>
      <Item>
        <Input placeholder="Price" />
      </Item>
      <Item>
        <Input placeholder="Category" />
      </Item>
      <Button full>
        <Text>Save</Text>
      </Button>
    </Form>
  )
}

export default AddProductScreen
