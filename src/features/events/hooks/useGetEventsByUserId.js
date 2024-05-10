import {useQuery} from "@tanstack/react-query";
import {getAssignedEventsByUser} from "../../../services/apiEvents.js";

/**
 * Custom hook that fetches events assigned to team based on a specific team member userID.
 *
 * @param {string} userId - The ID of the user to fetch events for.
 * @return {Object} An object containing the fetching status and the assigned events data.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetEventsByUserId(userId) {
    const {isPending: isFetching, data: events, error} = useQuery({
        queryKey: ["events", userId],
        queryFn: () => getAssignedEventsByUser(userId)
    });

    return {isFetching, events};
}