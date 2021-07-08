import React from 'react';
import './Recipe.css'

const Recipe = ({ recipe: { recipe } }) => {
    return (
        <div className="recipe">
            <h1>{recipe.label}</h1>
            <ol>
                {recipe.ingredients.map((ingredient, key) => (
                    <li key={key}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{recipe.calories}</p>
            <img className="image" src={recipe.image} alt="recipe-img" />
        </div>
    );
};

export default Recipe;
