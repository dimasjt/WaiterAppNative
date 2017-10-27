import React from "react"
import { StyleSheet } from "react-native"
import { Picker, Label, View } from "native-base"
import { Field } from "redux-form"
import PropTypes from "prop-types"

const Item = Picker.Item

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
})

const SelectField = ({ options, placeholder, input, label }) => {
  const items = options.map((opt) => (
    <Item key={opt.id} label={opt.name} value={opt.id} />
  ))

  return (
    <View style={styles.container}>
      <Label style={styles.label}>{label}</Label>
      <Picker
        placeholder={placeholder}
        onValueChange={input.onChange}
        selectedValue={input.value}
        {...input}
      >
        {items}
      </Picker>
    </View>
  )
}

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
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
