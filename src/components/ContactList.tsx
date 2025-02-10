import { Contact } from "../Contact";
import { ListSeparator } from "./ListSeparator";
import classes from './ContactList.module.css';
import { ContactRow } from "./ContactRow";

type ContactListProps = {
  contacts: Contact[];
  searchText: string;
}

export function ContactList({ contacts, searchText }: ContactListProps) {
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().indexOf(searchText.toLowerCase())> -1);

  const contactsAttened = filteredContacts.filter(contact => contact.attended);
  const contactsAbsent = filteredContacts.filter(contact => !contact.attended);

  return (
    <>
    <ListSeparator heading='Attended' ></ListSeparator>
    <div className={`${classes.list}`}>    
      {contactsAttened.map( product =>
        <ContactRow
            contact={product}
            key={product.name} />
      )}
    </div>
    <ListSeparator heading='Absent' ></ListSeparator>
    <div className={`${classes.list}`}>
      {contactsAbsent.map( product =>
        <ContactRow
            contact={product}
            key={product.name} />
      )}
    </div>
    </>
  );
}