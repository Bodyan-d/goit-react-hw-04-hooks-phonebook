import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

let isFirstRender = true;

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      setFilter(e.target.value);
      return;
    }
    if (e.target.name === 'name') {
      setName(e.target.value);
      return;
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setContacts(() => {
      if (contacts.some(contact => contact.name.includes(name))) {
        alert(`${name} is already in contacts`);
        return;
      }

      return [...contacts, { id: uuidv4(), name, number }];
    });

    setName('');
    setNumber('');
  };

  const handleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteItem = e => {
    const { id } = e.target;
    const newContacts = contacts.filter(el => el.id !== id);

    return setContacts(newContacts);
  };

  // deleteItem = e => {
  //   const elemIndexToDelete = this.state.contacts.findIndex(
  //     contact => e.target.id === contact.id,
  //   );
  //   return this.setState(prevState => {
  //     console.log(elemIndexToDelete);
  //     prevState.contacts.splice(elemIndexToDelete, 1);

  //     return { prevState };
  //   });
  // };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={handleFilter()} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
