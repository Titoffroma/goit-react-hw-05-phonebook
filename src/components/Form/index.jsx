import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/ButtonStyled';
import { Label, FormButton } from './FormStyled';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  clearValue = e => {
    this.setState({ name: '', number: '' });
    this.props.handleSubmit(e);
  };

  handleChange = e => {
    this.setState({ [e.target.getAttribute('id')]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.clearValue}>
        <Label>
          <strong>Name</strong>
          <br />
          <Button
            as="input"
            type="text"
            required
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <br />
        <Label>
          <strong>Number</strong>
          <br />
          <Button
            as="input"
            type="tel"
            required
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <br />
        <FormButton>Add contact</FormButton>
      </form>
    );
  }
}
