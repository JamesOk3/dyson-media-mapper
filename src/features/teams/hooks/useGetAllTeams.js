import {useQuery} from "@tanstack/react-query";
import {getAllTeams} from "../../../services/apiTeams.js";

/**
 * Custom hook that fetches all teams from the API and returns the fetching status and the teams data.
 *
 * @return {Object} An object containing the fetching status and the teams data.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetAllTeams() {
    const {isPending: isFetching, data: teams, error} = useQuery({
        queryKey: ["teams"],
        queryFn: getAllTeams
    });

    return {isFetching, teams}
}