import supabase from "./supabase.js";
import toast from "react-hot-toast";

/**
 * Adds or updates an event in the database.
 *
 * @param {Object} event - The event object to be added or updated
 * @param {string} id - The ID of the event to update, if provided
 * @return {Object} The data of the added or updated event
 *
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function addUpdateEvent(event, id) {

    let query = supabase.from("events");

    console.log(id, event);

    if (!id) query = query.insert([event]);

    // updating existing event
    if (id) query = query.update(event).eq("id", id);

    const { data, error } = await query.select().single();
    console.log(error);
    if(error) throw new Error("Could not save event");
    return data;
}

/**
 * Retrieves all events from the database.
 *
 * @return {Array} An array of event
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if(error) throw new Error("Could not fetch events");
    return data;
}

/**
 * Deletes an event from the "events" table in the database based on the provided ID.
 *
 * @param {string} id - The ID of the event to delete.
 * @return {Promise<object>} The data of the deleted event.
 * @throws {Error} If the operation fails.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function deleteEvent(id) {
    const { data, error } = await supabase
        .from("events")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete event");
    return data;
}

/**
 * Retrieves an event from the "events" table in the database based on the provided ID.
 *
 * @param {string} id - The ID of the event to retrieve.
 * @return {Promise<object>} The event object with the specified ID.
 * @throws {Error} If the operation fails.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getEvent(id) {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id);
    if(error) toast.error(error.message);
        // throw new Error("Could not fetch event");

    return data[0];
}

export async function getUnassignedEvents() {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .is("assignedTeam", null);
    if(error) throw new Error("Could not fetch events");
    return data;
}

export async function getAssignedEvents() {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .neq("assignedTeam", null);
    if(error) throw new Error("Could not fetch events");
    return data;
}

export async function getAssignedEventsByTeam(teamId) {
    // if (!teamId) return [];

    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("assignedTeam", teamId)
    if(error) throw new Error("Could not fetch events");
    return data;
}