import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Section from './components/Section/Section';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StorageKey = 'contacts';

let contactsList = 
 [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const App = () => {

const [contacts, setContacts] = useState(contactsList);
const [filter, setFilter] = useState('');
const firtRenderForm  = useRef(true);

    useEffect(() => {
        const storageContacts = localStorage.getItem(StorageKey);
        if (storageContacts) {
            setContacts(JSON.parse(storageContacts));
        }
    }, []);

    useEffect(() => {
      if (firtRenderForm.current) {
        firtRenderForm.current = false;
        return;
      }
      localStorage.setItem(StorageKey, JSON.stringify(contacts));
    }, [contacts]);


  const handleSubmit = (contact) => {
    const ifExist = contacts.find(item => item.name === contact.name);
    if (ifExist) {
     return toast.error(`${contact.name} is already exist`);
    }
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts([...contacts, newContact]);
  }


  const filterHandler = (filterValue) => {
    setFilter(filterValue);
  }

  const onDeleteContact = (id) => {
    setContacts(state => state.filter(contact => contact.id !== id));
  }

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name
      .toLowerCase()
      .includes(filter.toLowerCase()));

    }
return (
  <div>
    <Section title="Phonebook">
      <ContactForm onSubmit={handleSubmit} />
    </Section>
    <Section title="Contacts">
      <Filter onFilterChange={filterHandler} />
      <ContactList contacts={filteredContacts()} onDeleteContact={onDeleteContact} />
      <ToastContainer />
    </Section>
  </div>
);
}


