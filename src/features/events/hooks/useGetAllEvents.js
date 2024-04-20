import {getEvents} from "../../../services/apiEvents.js";
import {useQuery} from "@tanstack/react-query";

export function useGetAllEvents() {
    const {isPending: isFetchingEvents, data: events, error} = useQuery({
        queryKey: ["events"],
        queryFn: getEvents
    })

    return {isFetchingEvents, events}
}