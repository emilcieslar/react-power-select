import React, { Component } from 'react'

export default class TypeAheadSelectTrigger extends Component {
  constructor() {
    super(...arguments)
    this.handleOnFocus = ::this.handleOnFocus
    this.handleOnBlur = ::this.handleOnBlur
  }

  handleOnFocus(event) {
    this.props.select.open()
  }

  handleOnBlur(event) {
    let select = this.props.select
    setTimeout(function() {
      select.close()
    }, 300)
  }

  render() {
    let props = this.props
    let {
      selectedOption,
      selectedLabel,
      placeholder,
      disabled,
      onClick,
      handleOnChange,
      handleKeyDown,
      handleOnFocus,
      handleOnBlur,
    } = props

    let value = this.props.searchTerm
    if (value === null) {
      value = selectedOption ? selectedOption[selectedLabel] : ''
    }

    return (
      <div
        className='powerselect__trigger'
        onClick={onClick}
      >
        <input
          className='powerselect__trigger-input'
          autoComplete='off'
          spellCheck='false'
          placeholder={props.placeholder}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <span
          className='powerselect__trigger-status'
        ></span>
      </div>
    )
  }
}
