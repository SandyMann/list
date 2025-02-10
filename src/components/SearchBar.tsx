import classes from './SearchBar.module.css';

type SearchBarProps = {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}

export function SearchBar({
  searchText,
  onSearchTextChange
}: SearchBarProps) {
  return (
    <div className={`${classes.searchBar}`}>
      <input 
        className={`${classes.searchBox}`} 
        type="search" 
        name="search" 
        placeholder="Search"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)} />
    </div>  
  );
}