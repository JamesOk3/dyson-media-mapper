import supabase from "./supabase.js";

/**
 * Inserts a new team into the "teams" table in the database.
 *
 * @param {Object} team - The team object to be inserted.
 * @return {Promise<Object>} The inserted team data.
 * @throws {Error} If the insertion fails.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function addTeam(team) {
    const { data, error } = await supabase
        .from("teams")
        .insert([team]).select().single();
    if(error) throw new Error("Could not add team");
    return data;
}

/**
 * Updates a team's information in the database based on the provided ID and team data.
 *
 * @param {string} id - The ID of the team to update.
 * @param {Object} team - The updated team data.
 * @return {Object} The updated team data.
 *
 * @throws {Error} If the update fails.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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

/**
 * Retrieves all teams from the database, including their leader and members.
 *
 * @return {Promise<Array>} An array of team objects with their leader and members.
 * @throws {Error} If the operation fails.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getAllTeams() {

    let { data, error } = await supabase
        .from('teams')
        .select(`*, 
        leaderData: teams_leader_fkey (id, firstname, lastname, avatar, address, city, postcode, email, phonenumber),
        members: profiles_teamId_fkey (id, firstname, lastname, avatar)`);

    if(error) throw new Error("Could not fetch teams");
    return data;
}

/**
 * Retrieves a team from the database based on the provided ID, including their leader and members.
 *
 * @param {string} id - The ID of the team to retrieve.
 * @return {Promise<Object>} A promise that resolves to the team object with its leader and members.
 * @throws {Error} If the operation fails.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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

/**
 * Retrieves a team from the database based on the provided leader ID.
 *
 * @param {string} leaderId - The ID of the leader to retrieve the team for.
 * @return {Object} The team object corresponding to the leader.
 *
 * @throws {Error} If the operation fails.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getTeamByLeader(leaderId) {
    const { data, error } = await supabase
        .from('teams')
        .select("*")
        .eq('leader', leaderId);
    if(error) throw new Error("Could not fetch team");
    return data[0];
}

/**
 * Deletes a team from the database based on the provided ID.
 *
 * @param {string} id - The ID of the team to delete.
 * @return {Promise<Object>} The deleted team data.
 * @throws {Error} If the deletion fails.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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

/**
 * Retrieves the team members from the 'profiles' table in the database based on the provided team ID.
 *
 * @param {string} id - The ID of the team.
 * @return {Promise<Array>} An array of team member objects containing their ID, first name, last name, and avatar.
 * @throws {Error} If there is an error fetching the team members.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getTeamMembers(id) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id, firstname, lastname, avatar')
        .eq('teamId', id)

    if(error) throw new Error("Could not fetch team members");
    return data;
}

/**
 * Retrieves unassigned users from the database with specific fields.
 *
 * @return {Array} An array of unassigned user objects containing ID, first name, last name, city, and role.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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

