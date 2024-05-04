import {getUnassignedUsers} from "../../../services/apiTeams.js";
import {useQuery} from "@tanstack/react-query";

/**
 * Custom hook to fetch users who have not been assigned to a team.
 *
 * @return {Object} An object containing the fetching status and the unassigned users data.
 * - isFetching: A boolean indicating if the unassigned users are currently being fetched.
 * - users: An array of unassigned user objects.
 * - error: An error object if there was an error fetching the unassigned users.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetUnassignedUsers() {
    const {isPending: isFetching, data: users, error} = useQuery({
        queryKey: ["teams", {id: "unassigned-users"}],
        queryFn: getUnassignedUsers
    });

    return {isFetching, users};
}