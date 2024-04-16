import supabase, {supabaseUrl} from "./supabase.js";

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



export async function getProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if(error) throw new Error("Could not fetch products");
    return data;
}

export async function deleteProduct(id) {
    const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete product");
    return data;
}