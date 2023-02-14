import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';

import classes from './SearchComponent.module.css';

type SearchComponentProps = {
    loadUser: (userName: string) => Promise<void>;

};

const SearchComponent = ({ loadUser }: SearchComponentProps) => {

    const [userName, setUserName] = useState('');

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName);
        }
    }

    return (
        <div className={classes.searchContainer}>
            <h2>Busque por um usuario</h2>
            <p>Conheça seus melhores repositorios</p>
            <div className={classes.searchInputContainer}>
                <input type="text" placeholder="Digite o nome do usuario"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
                {
                    
                }
            </div>
        </div>
    )
}

export default SearchComponent;