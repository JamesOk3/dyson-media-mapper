import {getAllUsers} from "../../../services/apiAuth.js";
import {useQuery} from "@tanstack/react-query";

/**
 * Custom hook to fetch all users' data.
 * uses getAllUsers function to fetch data from the backend through REST API
 *
 * @return {Object} Object containing information about fetching status and users data
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetAllUsers() {
    const {isPending: isFetching, data: users, error} = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers
    })

    return {isFetching, users}
}