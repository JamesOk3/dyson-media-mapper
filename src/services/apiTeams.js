import supabase from "./supabase.js";


export async function addTeam(team) {
    const { data, error } = await supabase
        .from("teams")
        .insert([team]).select().single();
    if(error) throw new Error("Could not add team");
    return data;
}

export async function updateTeam(id, team) {
    const { data, error } = await supabase
        .from("teams")
        .update({...team})
        .eq("id", id)
        .select();

    if(error) throw new Error("Could not update team");

    // update team leader profile
    const { error: error2 } = await supabase
        .from('profiles')
        .update({role: 'leader'} )
        .eq('id', team.leader)
        .select();
    if(error2) throw new Error("Could not update team leader");

    return data;
}

export async function getAllTeams() {

    let { data, error } = await supabase
        .from('teams')
        .select(`*, 
        leaderData: teams_leader_fkey (id, firstname, lastname, avatar, address, city, postcode, email, phonenumber),
        members: profiles_teamId_fkey (id, firstname, lastname, avatar)`);

    if(error) throw new Error("Could not fetch teams");
    return data;
}

export async function getTeamById(id) {
    const { data, error } = await supabase.from("teams")
        .select(`*, 
        leaderData: teams_leader_fkey (id, firstname, lastname, avatar, address, city, postcode, email, phonenumber),
        members: profiles_teamId_fkey (id, firstname, lastname, avatar)`
        )
        .eq("id", id);
    if(error) throw new Error("Could not fetch team");
    return data;
}

export async function deleteTeam(id) {
    const { data, error } = await supabase
        .from('teams')
        .delete()
        .eq('id', id)

    if(error) {
        console.log(error);
        throw new Error("Could not delete team");
    }
    return data;
}

export async function getTeamMembers(id) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id, firstname, lastname, avatar')
        .eq('teamId', id)

    if(error) throw new Error("Could not fetch team members");
    return data;
}

export async function getUnassignedUsers() {
    const { data, error } = await supabase
        .from('profiles')
        .select('id, firstname, lastname, city, role')
        .is('teamId', null)
        .eq('role', 'member');

    if(error) {
        console.log(error);
        throw new Error("Could not fetch users");
    }
    return data;

}

/*
leaderData: profiles!public_teams_leader_fkey (id, firstname, lastname, avatar, address, city, postcode, email, phonenumber),
    members: profiles!profiles_teamId_fkey (id, firstname, lastname, avatar)`*/
