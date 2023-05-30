import PropTypes from 'prop-types';
import {
  ContactMarkupList,
  ContactMarkupItem,
  ContactMarkupButton,
  ContactName,
} from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperations';
import { selectIsLoading, selectContacts } from 'redux/Contacts/selectors';

export const ContactList = ({ onGetFilteredContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts && (
        <ContactMarkupList>
          {onGetFilteredContact().map(({ id, name, number }) => (
            <ContactMarkupItem key={id}>
              <p>
                <ContactName>{name}: </ContactName> {number}
              </p>
              <ContactMarkupButton
                disabled={isLoading}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </ContactMarkupButton>
            </ContactMarkupItem>
          ))}
        </ContactMarkupList>
      )}
    </>
  );
};

ContactList.propTypes = {
  onGetFilteredContact: PropTypes.func.isRequired,
};
