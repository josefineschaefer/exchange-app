import React from 'react'
import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'
import de from 'date-fns/locale/de'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('de', de)

export default function MyDatepicker({ date, onChange }) {
  return (
    <DatePickerStyled
      selected={date}
      onChange={onChange}
      locale='de'
      placeholderText='Datum'
      shouldCloseOnSelect={true}
      dateFormat='dd.MM.yyyy'
    />
  )
}

const DatePickerStyled = styled(DatePicker)`
  font-size: inherit;
`