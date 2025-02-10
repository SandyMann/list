import { useState } from 'react';
import classes from './App.module.css';
import { SearchBar } from './components/SearchBar';
import { Contact, CONTACTS } from './Contact';
import { ContactList } from './components/ContactList';

type SearchableContactListProps = {
  contacts: Contact[];
}

function SearchableContactList({ contacts }: SearchableContactListProps) {
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className={`${classes.listContainer}`}>
      <SearchBar 
        searchText={searchText} 
        onSearchTextChange={setSearchText} />
      <ContactList 
        contacts={contacts} 
        searchText={searchText} />
    </div>
  );
}

export default function App() {
  return <SearchableContactList contacts={CONTACTS} />;
}