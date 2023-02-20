import React from 'react';

function RecipeItem({ recipe, deleteRecipe, index }) {
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    // <> isn't supported in qualifed, had to use <React.Fragment> instead
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{cuisine}</td>
                <td>
                    <img src={photo} alt={name} />
                </td>
                <td className='content_td'>
                    <p>{ingredients}</p>
                </td>
                <td className='content_td'>
                    <p>{preparation}</p>
                </td>
                <td>
                    <button name='delete' onClick={() => deleteRecipe(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}

export default RecipeItem;
