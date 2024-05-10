import {getAllProductRequests} from "../../../services/apiBookings.js";
import {useQuery} from "@tanstack/react-query";

/**
 * Custom hook to fetch all requests data.
 *
 * @return {Object} An object containing the fetching status and the pending bookings data.
 *
 * @author James M Kambanga
 * Date: May 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useGetAllRequests() {
    const {isPending: isFetching, data: bookings, error} = useQuery({
        queryKey: ["bookings", "pending"],
        queryFn: getAllProductRequests
    });

    return {isFetching, bookings}
}