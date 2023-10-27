import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const updateSearch: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

  const getSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const getRecipes = useCallback(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=%VITE_APP_ID%&app_key=%VITE_APP_KEY%`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  }, [query]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes, query]);

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button onClick={() => {}} type="submit" className="search-button">
          Search
        </button>
      </form>{" "}
      <div className="recipes">
        {recipes.map((recipe, key) => (
          <Recipe key={key} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
