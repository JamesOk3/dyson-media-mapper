import {useQuery} from "@tanstack/react-query";
import {getTeamById} from "../../../services/apiTeams.js";

/**
 * A custom hook that fetches a team details by its ID using the useQuery hook.
 *
 * @param {string} teamId - The ID of the team to fetch.
 * @return {Object} An object containing the fetching status and the team data.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetTeamById(teamId) {
    const {isPending: isFetchingTeam, data: team} = useQuery({
        queryKey: ["team", teamId],
        queryFn: () => getTeamById(teamId)
    });

    return {isFetchingTeam, team}
}
