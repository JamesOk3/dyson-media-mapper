import supabase from "./supabase.js";

/**
 * Function to add or update a pickup location in the database.
 *
 * @param {Object} location - The location object to be added or updated
 * @param {string} id - The id of the location to update, if provided
 * @return {Promise<Object>} The updated or newly added location data
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function addUpdatePickupLocation(location, id) {

    let query = supabase.from("pickup_locations");

    if (!id) query = query.insert([location]);

    if (id) query = query.update(location).eq("id", id);

    const {data, error } = await query.select().single();
    console.log(error);

    if (error) throw new Error("Could not save location");

    return data;
}

/**
 * Retrieves the pickup locations from the database.
 *
 * @return {Array} The array of pickup locations.
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getPickupLocations() {
    const { data, error } = await supabase.from("pickup_locations").select("*");

    if(error) throw new Error("Could not fetch Locations");

    return data;
}

/**
 * Asynchronously deletes a pickup location from the database.
 *
 * @param {number} id - The ID of the pickup location to be deleted
 * @return {Promise<object>} The deleted data
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function deletePickupLocation(id) {
    const { data, error } = await supabase.from("pickup_locations")
        .delete()
        .eq("id", id)

    if(error) throw new Error("Could not delete location");
    return data;
}