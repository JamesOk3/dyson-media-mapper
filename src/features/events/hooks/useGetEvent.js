import {getEvent} from "../../../services/apiEvents.js";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";

/**
 * Custom hook to fetch a specific event based on the eventId parameter.
 *
 * @return {Object} An object containing the fetching status and the event data.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetEvent() {
    const {eventId} = useParams();

    const {isPending: isFetchingEvent, data: event} = useQuery({
        queryKey: ["event", eventId],
        queryFn: () => {
           return  eventId ? getEvent(eventId) : {}
        }
    })

    return {isFetchingEvent, event}
}