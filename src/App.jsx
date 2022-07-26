
import { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { ContactsReviewForm } from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './styleConfig/container.styled';
import { Title } from './styleConfig/title.styled';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const contact = localStorage.getItem('contacts');
  const parseContact = JSON.parse(contact);

  const [contacts, setContacts] = useState(() => {
    return parseContact ?? initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitForm = ({ name, number }, { resetForm }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const person = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, person]);
      resetForm();
    }
  };
  
  const onFilter = evt => {
    setFilter(evt.target.value);
  };

  const onDelete = id => {
    setContacts(prevState => {
      return prevState.filter(c => c.id !== id);
    });
  };

  const newContacts = useMemo(() => {
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsReviewForm submitForm={submitForm} />
      <Filter onFilter={onFilter} filter={filter} />
      <ContactList contactsInfo={newContacts} deleteContact={onDelete} />
    </Container>
  );
}
