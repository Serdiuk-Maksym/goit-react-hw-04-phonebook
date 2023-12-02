import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChangeValue = evt => {
    const newName = evt.target.value;
    const key = evt.target.name;
    return this.setState({ [key]: newName });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const lowercaseName = name.toLowerCase(); // Приведение имени к нижнему регистру

    if (this.props.onSubmitHandler({ name: lowercaseName, number })) {
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="inputName">Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          id="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChangeValue}
        />
        <label htmlFor="inputNumber">Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          id="inputNumber"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChangeValue}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};
