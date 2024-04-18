import supabase from "./supabase.js";

/**
 * Retrieves all roles from the database.
 *
 * @return {Array} Array of role objects
 *
 * @author James M Kambanga
 * Date: April 16, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getRoles() {
    const { data, error } = await supabase.from("roles").select("id, roleName");
    if(error) throw new Error("Could not fetch roles");
    return data;
}