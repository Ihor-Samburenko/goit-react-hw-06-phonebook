import { useSelector, useDispatch } from 'react-redux';

import ContactsBlock from 'components/ContactsBlock/ContactsBlock';
import PhoneBookList from 'components/PhonebookList/PhoneBookList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';

import css from '../Phonebook/Phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getContacts);

  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return alert(`${name} is already exist`);
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number === number
      );
    });
    return Boolean(dublicate);
  };

  const onDelete = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.block}>
        <ContactsBlock title="Phonebook"></ContactsBlock>
        <PhonebookForm onSubmit={onAddContact} />
        <ContactsBlock title="Contacts">
          <input
            onChange={handleFilterChange}
            value={filter}
            className={css.input}
            placeholder="Find contact"
          />

          <PhoneBookList items={filteredContacts} onDelete={onDelete} />
        </ContactsBlock>
      </div>
    </div>
  );
};

export default Phonebook;
