import React, {Component, PropTypes} from 'react'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class Picker extends Component {
  render() {
    const {value, onChange, options} = this.props

    return (
      <SelectField
        value={value}
        onChange={(event, index, value) => onChange(value)} >
          {options.map(option =>
            <MenuItem value={option} primaryText={option}>
            </MenuItem>)
          }
      </SelectField>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
