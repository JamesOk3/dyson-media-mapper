import {getEvents} from "../../../services/apiEvents.js";
import {useQuery} from "@tanstack/react-query";

/**
 * Custom hook that fetches all events from the API and returns the fetching status and the events data.
 *
 * @return {Object} An object containing the fetching status and the events data.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useGetAllEvents() {
    const {isPending: isFetchingEvents, data: events, error} = useQuery({
        queryKey: ["events"],
        queryFn: getEvents
    })

    return {isFetchingEvents, events}
}