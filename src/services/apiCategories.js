import supabase from "./supabase.js";

export async function addUpdateCategory(category, id) {

    let query = supabase.from("product_categories");

    if (!id) query = query.insert([category]);

    if (id) query = query.update(category).eq("id", id);

    const { data, error } = await query.select().single();
    if(error) throw new Error("Could not save category");
    return data;

}

export async function getCategories() {
    const { data, error } = await supabase.from("product_categories").select("*");

    if(error) throw new Error("Could not fetch Categories");
    return data;
}

export async function deleteCategory(id) {
    const { data, error } = await supabase
        .from("product_categories")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete category");
    return data;
}
