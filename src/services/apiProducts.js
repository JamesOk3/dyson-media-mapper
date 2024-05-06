import supabase, {supabaseUrl} from "./supabase.js";

/**
 * Function to add or update a product in the database along with its image.
 *
 * @param {object} newProduct - The new product object to be added or updated
 * @param {string} id - The ID of the existing product to be updated, if any
 * @return {object} The data of the added or updated product
 *
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function addUpdateProduct(newProduct, id) {

    const hasImagePath = newProduct.photo?.startsWith?.(supabaseUrl); // check if image path is already in supabase url

    const imageName = `${Math.random()}-${newProduct.photo?.name}`.replaceAll("/", "");

    const imagePath  = hasImagePath ? newProduct.photo : `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;

    let query = supabase.from("products");

    // adding new product
    if (!id) query = query.insert([{...newProduct, photo: imagePath}]);

    // updating existing product
    if (id) query = query
        .update({ ...newProduct, photo: imagePath })
        .eq("id", id);

    const { data, error } = await query.select().single();

    if(error) throw new Error("Could not add product");

    // upload image
    const {error:storageError } = await supabase
        .storage
        .from('products')
        .upload(imageName, newProduct.photo);


    if(storageError) {
        // console.log(newProduct.photo);
        // delete corresponding product
        // await supabase.from("products").delete().eq("id", data.id);

        throw new Error("Could not upload product image");
        // throw new Error(storageError.message);
    }

    return data;
}
export async function updateProductQuantity({id, quantity}) {
    const { data, error } = await supabase
        .from("products")
        .update({quantity})
        .eq("id", id)
        .select();
    if(error) throw new Error("Could not update product quantity");
    return data;
}

/**
 * Retrieves all products from the database.
 *
 * @return {Array} Array of product objects
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export async function getProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if(error) throw new Error("Could not fetch products");
    return data;
}

export async function getProductById(id) {
    const { data, error } = await supabase
        .from("products")
        .select("*, category: product_categories(id, categoryName)")
        .eq("id", id)
        .single();
    console.log(error);
    if(error) throw new Error("Could not fetch product");
    return data;
}

/**
 * Delete a product from the database by ID.
 *
 * @param {number} id - The ID of the product to delete
 * @return {Promise} The data of the deleted product
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export async function deleteProduct(id) {
    const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete product");
    return data;
}