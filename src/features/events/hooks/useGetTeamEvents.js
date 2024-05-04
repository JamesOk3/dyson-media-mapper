import {useQuery} from "@tanstack/react-query"
import {getAssignedEventsByTeam} from "../../../services/apiEvents.js";

/**
 * Custom hook that fetches team events based on the provided team ID.
 *
 * @param {string} teamId - The ID of the team to fetch events for.
 * @return {Object} An object containing the fetching status and the team events data.
 *
 * @author James M Kambanga
 * Date: April 22, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetTeamEvents(teamId) {
    const {isPending: isFetching, data: teamEvents, error} = useQuery({
        queryKey: ["events", teamId],
        queryFn: () => getAssignedEventsByTeam(teamId)
    });

    return {isFetching, teamEvents};
}