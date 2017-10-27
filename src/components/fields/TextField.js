import React from "react"
import { Item, Label, Input } from "native-base"
import { Field } from "redux-form"
import PropTypes from "prop-types"

const TextField = ({ input, label }) => {
  return (
    <Item stackedLabel>
      <Label>{label}</Label>
      <Input {...input} />
    </Item>
  )
}

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default (props) => (
  <Field component={TextField} {...props} />
)
