import supabase from "./supabase.js";
import toast from "react-hot-toast";

export async function addUpdateEvent(event, id) {

    let query = supabase.from("events");

    if (!id) query = query.insert([{
        ...event,
        assignedTeam: parseInt(event.assignedTeam)  ?? null
    }]);

    // updating existing event
    if (id) query = query
        .update({
            ...event,
            assignedTeam: parseInt(event.assignedTeam)  ?? null
        })
        .eq("id", id);

    const { data, error } = await query.select().single();
    if(error) throw new Error("Could not save event");
    console.log(data);
    return data;
}

export async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if(error) throw new Error("Could not fetch events");
    return data;
}

export async function deleteEvent(id) {
    const { data, error } = await supabase
        .from("events")
        .delete()
        .eq("id", id);
    if(error) throw new Error("Could not delete event");
    return data;
}

export async function getEvent(id) {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id);
    if(error) toast.error(error.message);
        // throw new Error("Could not fetch event");

    return data[0];
}