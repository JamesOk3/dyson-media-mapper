import supabase from "./supabase.js";

/**
 * Function to add or update a category in the product_categories table.
 *
 * @param {Object} category - The category object to be added or updated
 * @param {string} id - The id of the category to be updated, if any
 * @return {Object} The data of the added or updated category
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function addUpdateCategory(category, id) {

    let query = supabase.from("product_categories");

    if (!id) query = query.insert([category]);

    if (id) query = query.update(category).eq("id", id);

    const { data, error } = await query.select().single();
    if(error) throw new Error("Could not save category");
    return data;

}

/**
 * Retrieves all categories from the "product_categories" table.
 *
 * @return {Array} An array of all categories.
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getCategories() {
    const { data, error } = await supabase.from("product_categories").select("*");

    if(error) throw new Error("Could not fetch Categories");
    return data;
}

/**
 * Deletes a category from the "product_categories" table based on the provided id.
 *
 * @param {any} id - The id of the category to delete.
 * @return {Promise<any>} The data of the deleted category.
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function deleteCategory(id) {
    const { data, error } = await supabase
        .from("product_categories")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete category");
    return data;
}
