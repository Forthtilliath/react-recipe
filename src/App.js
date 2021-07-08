import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
    const APP_ID = '719bbe64';
    const APP_KEY = 'ebd7406bf1feaeeae9ca580f3578bcc2';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    const updateSearch = (e) => setSearch(e.target.value);

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    const getRecipes = useCallback(() => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((res) => res.json())
            .then((data) => setRecipes(data.hits));
    },[query]);

    useEffect(() => {
        getRecipes();
    }, [getRecipes, query]);

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button onClick={() => {}} type="submit" className="search-button">
                    Search
                </button>
            </form>{' '}
            <div className="recipes">
                {recipes.map((recipe, key) => (
                    <Recipe key={key} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default App;
