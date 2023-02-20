import './App.css';

import React, { useState } from 'react';

import RecipeCreateForm from './RecipeCreate';
import RecipeData from './RecipeData';
import RecipeList from './RecipeList';

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    // The function provides the ability for the <RecipeList /> component to list and delete an existing recipe.
    const handleDelete = (index) => {
        // make a copy of the recipes array
        const newRecipes = [...recipes];
        // remove the item at the given index
        newRecipes.splice(index, 1);
        // update the recipes state to the new array
        setRecipes(newRecipes);
    };

    // The function provides the ability for the <RecipeCreate /> component to create new recipes.
    const handleCreate = (recipe) => {
        // Add the new recipe to the existing recipes
        setRecipes([...recipes, recipe]);
    };

    return (
        <div className='App'>
            <header>
                <h1>Delicious Food Recipes</h1>
            </header>
            <RecipeList recipeList={recipes} deleteRecipes={handleDelete} />
            <RecipeCreateForm createRecipe={handleCreate} />
        </div>
    );
}

export default App;
