import React from 'react';
import './ContactForm.css';

export default function ContactForm({
  name,
  number,
  handleChange,
  handleSubmit,
}) {
  return (
    <form className="phonebook-form" onSubmit={handleSubmit}>
      <label className="phonebook-label">
        Name
        <input
          className="phonebook-input"
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="phonebook-label">
        Number
        <input
          className="phonebook-input"
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className="submt-form" type="submit">
        Submit
      </button>
    </form>
  );
}
