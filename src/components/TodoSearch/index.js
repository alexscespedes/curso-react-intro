import { React } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../../context';
import './TodoSearch.css';

function TodoSearch() {
const {
    searchValue,
    setSearchValue
} = useContext(TodoContext)

{
    return (
        <input 
        placeholder="Learn React JS"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)
        }} />
    );
}

}

export { TodoSearch };