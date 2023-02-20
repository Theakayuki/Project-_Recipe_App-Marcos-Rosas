import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipeList, deleteRecipes }) {
    const recipeContent = recipeList.map((recipe, index) => {
        // Create a RecipeItem component for each recipe in the recipeList
        return (
            <RecipeItem key={index} recipe={recipe} deleteRecipe={deleteRecipes} index={index} />
        );
    });

    return (
        <div className='recipe-list'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Photo</th>
                        <th>Ingredients</th>
                        <th>Preparation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{recipeContent}</tbody>
            </table>
        </div>
    );
}

export default RecipeList;
