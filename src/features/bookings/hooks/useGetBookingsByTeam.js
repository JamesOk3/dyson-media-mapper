import {useQuery} from "@tanstack/react-query";
import {getBookingsByTeam} from "../../../services/apiBookings.js";

/**
 * Retrieves all bookings for a team based on the provided user ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Object} An object containing the fetching status and the bookings data.
 * - `isFetching` (boolean): Indicates whether the bookings are currently being fetched.
 * - `bookings` (Array): An array of bookings for the team.
 **
 * @author James M Kambanga
 * Date: May 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useGetBookingsByTeam(userId) {
    const {isPending: isFetching, data: bookings, error} = useQuery({
        queryKey: ["bookings", "team"],
        queryFn: () => getBookingsByTeam(userId)
    });

    return {isFetching, bookings}
}