import {getEvent} from "../../../services/apiEvents.js";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";


export function useGetEvent() {
    const {eventId} = useParams();

    const {isPending: isFetchingEvent, data: event} = useQuery({
        queryKey: ["event", eventId],
        queryFn: () => getEvent(eventId)
    })

    return {isFetchingEvent, event}
}