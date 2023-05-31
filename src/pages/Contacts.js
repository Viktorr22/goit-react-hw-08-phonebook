import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Section, ContactList, Filter } from 'components';
import { fetchContacts } from 'redux/Contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectFilter,
} from 'redux/Contacts/selectors';
import {
  ContactsListTitle,
  NoContactsText,
  PageTitle,
} from './Styles/Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContact = () => {
    if (contacts.length > 0) {
      const lowerFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerFilter)
      );
    }
  };

  return (
    <Section>
      <PageTitle>Phonebook</PageTitle>
      <Form />
      <ContactsListTitle>Contacts</ContactsListTitle>
      {contacts.length === 0 ? (
        <NoContactsText>There is no contacts</NoContactsText>
      ) : (
        <>
          <Filter />
          <ContactList onGetFilteredContact={getFilteredContact} />
        </>
      )}
      {error && <p>{error}</p>}
    </Section>
  );
}
