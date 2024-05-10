import supabase from "./supabase.js";

/**
 * Creates or updates a booking in the database.
 *
 * @param {Object} booking - The booking object to be created or updated.
 * @return {Promise<Object>} The created or updated booking data.
 * @throws {Error} If there is an error creating or updating the booking.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export async function createUpdateBooking(booking) {
    const { data, error } = await supabase
        .from("bookings")
        .insert([booking]).select().single();
    if(error) throw new Error("Could not create booking");
    return data;
}

/**
 * Retrieves all product requests from the database.
 *
 * @return {Promise<Object>} An object containing the product requests data.
 * @throws {Error} If there is an error fetching the product requests.
 *
 * @author James M Kambanga
 * Date: May 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getAllProductRequests() {
    const { data, error } = await supabase
        .from("bookings")
        .select(`*, event: events (id, eventName, eventDate, address, city, postcode, description),
                        team: teams (id, name, leader), product: products (id, name, quantity, price, category: product_categories (id, categoryName)), 
                        pickup_location: pickup_locations (id, address, city, postcode)`);
    console.log(error);
    if(error) throw new Error("Could not fetch bookings");
    return data;
}

/**
 * Retrieves all bookings for a team based on the provided user ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<Array>} An array of bookings for the team.
 * @throws {Error} If there is an error fetching the user's team or the bookings.
 *
 * @author James M Kambanga
 * Date: May 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getBookingsByTeam(userId) {
    // finding the team id of the user
    const { data: user, error } = await supabase
        .from("profiles")
        .select("id, teamId")
        .eq("id", userId)
        .single();
    if(error) throw new Error("Could not fetch user's team");

    // get all bookings for that team
    const { data, error: error2 } = await supabase
        .from("bookings")
        .select(`*, event: events (id, eventName, eventDate, address, city, postcode, description),
                        team: teams (id, name, leader), product: products (id, name, quantity, price, category: product_categories (id, categoryName)), 
                        pickup_location: pickup_locations (id, address, city, postcode)`)
        .eq("teamId", user.teamId);
    if(error2) throw new Error("Could not fetch bookings");
    return data;
}

/**
 * Updates a booking in the database based on the provided ID.
 *
 * @param {string} id - The ID of the booking to update.
 * @param {object} booking - The updated booking data.
 * @return {object} The updated booking data.
 * @throws {Error} If there is an error updating the booking.
 *
 * @author James M Kambanga
 * Date: May 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function updateBooking(id, booking) {
    const { data, error } = await supabase
        .from("bookings")
        .update(booking)
        .eq("id", id)
        .select();
    if(error) throw new Error("Could not update booking");
    return data;
}