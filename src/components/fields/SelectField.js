import React from "react"
import { Picker } from "native-base"
import { Field } from "redux-form"
import PropTypes from "prop-types"

const Item = Picker.Item

const SelectField = ({ options, placeholder, input }) => {
  const items = options.map((opt) => (
    <Item key={opt.id} label={opt.name} value={opt.id} />
  ))

  return (
    <Picker
      placeholder={placeholder}
      onValueChange={input.onChange}
      selectedValue={input.value}
      {...input}
    >
      {items}
    </Picker>
  )
}

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
}

SelectField.defaultProps = {
  options: [],
  placeholder: "",
}

export default (props) => {
  return (
    <Field component={SelectField} {...props} />
  )
}
