
import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { ContactsTitle, List } from './ContactList.stiled';

export default function ContactList({ contactsInfo, deleteContact }) {
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {contactsInfo?.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </div>
  );
}

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};