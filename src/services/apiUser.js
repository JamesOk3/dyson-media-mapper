import supabase from "./supabase.js";

export async function updateUserTeam(id, teamId) {
    const { data, error } = await supabase
        .from('profiles')
        .update({teamId} )
        .eq('id', id)
        .select();

    if(error) throw new Error("Could not update team");
    return data;
}

