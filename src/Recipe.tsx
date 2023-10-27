import "./Recipe.css";

type Props = {
  recipe: {
    recipe: {
      label: string;
      ingredients: { text: string }[];
      calories: number;
      image: string;
    };
  };
};

const Recipe = ({ recipe: { recipe } }: Props) => {
  return (
    <div className="recipe">
      <h1 className="recipe__title">{recipe.label}</h1>
      <ol className="recipe__ingredients">
        {recipe.ingredients.map((ingredient, key) => (
          <li key={key}>{ingredient.text}</li>
        ))}
      </ol>
      <p className="recipe__calories">{recipe.calories.toFixed(0)} calories</p>
      <div className="recipe__imageWrapper">
        <img className="recipe__image" src={recipe.image} alt="recipe-img" />
      </div>
    </div>
  );
};

export default Recipe;
