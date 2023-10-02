import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.reset();
    return this.props.onSubmit(this.state);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className="form-contact" onSubmit={this.handleSubmitForm}>
          <label className="label-contact">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label className="label-contact">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button className="btn-submit" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
