import { FormBox, FormButton, FormInput } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/Contacts/selectors';
import { addContact } from 'redux/Contacts/contactsOperations';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const formNameValue = event.target.elements.name.value;
    const formNumberValue = event.target.elements.number.value;
    const dataName = { name: formNameValue };
    const dataNumber = { number: formNumberValue };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === formNameValue.toLowerCase()
      )
    ) {
      alert(`${formNameValue} is already in contacts.`);
      event.target.reset();
      return;
    }
    dispatch(addContact({ ...dataName, ...dataNumber }));
    event.target.reset();
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <h3>Name</h3>
      <label>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <h3>Number</h3>
      <label>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <FormButton type="submit" disabled={isLoading}>
        Add contact
      </FormButton>
    </FormBox>
  );
};
