import {getTeamMembers} from "../../../services/apiTeams.js";
import {useQuery} from "@tanstack/react-query";

/**
 * Retrieves the team members for a given team ID.
 *
 * @param {string} teamId - The ID of the team to retrieve the members for.
 * @return {Object} An object containing the fetching status and the team members data.
 * - isFetchingMembers: A boolean indicating if the team members are currently being fetched.
 * - teamMembers: An array of team member objects.
 * - error: An error object if there was an error fetching the team members.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetTeamMembers(teamId) {

    const {isPending: isFetchingMembers, data: teamMembers, error} = useQuery({
        queryKey: ["teams", {id: "members", teamId}],
        queryFn: () => getTeamMembers(teamId)
    });

    return {isFetchingMembers, teamMembers}
}