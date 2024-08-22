import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";
import css from "./App.module.css";

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem("LS-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    window.localStorage.setItem("LS-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <div className={clsx(css.container)}>
      <h1 className={clsx(css.title)}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchByName} onSearch={setSearchByName} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
