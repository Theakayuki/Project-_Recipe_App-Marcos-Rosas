import React from 'react';

function RecipeCreateForm({ createRecipe }) {

    const handleSubmit = (event) => {
        // prevent the browser from reloading
        event.preventDefault();
        // get the form element from the event object
        const form = event.target;
        // get the values from the form elements
        const { name, cuisine, photo, ingredients, preparation } = form.elements;
        // call the createRecipe function with the form values
        createRecipe({
            name: name.value,
            cuisine: cuisine.value,
            photo: photo.value,
            ingredients: ingredients.value,
            preparation: preparation.value,
        });
        // reset the form values
        form.reset();
    };

    return (
        <form name='create' onSubmit={handleSubmit}>
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
                <tbody>
                    <tr>
                        <td>
                            <input type='text' name='name' placeholder='Recipe Name' />
                        </td>
                        <td>
                            <input type='text' name='cuisine' placeholder='Italian/Mexican/Ect..' />
                        </td>
                        <td>
                            <input type='text' name='photo' placeholder='Url of Food Image' />
                        </td>
                        <td>
                            <textarea
                                name='ingredients'
                                placeholder='Recipe Ingredients List'
                            ></textarea>
                        </td>
                        <td>
                            <textarea name='preparation' placeholder='Recipe Steps'></textarea>
                        </td>
                        <td>
                            <button name='create' type='submit'>
                                Create
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreateForm;
