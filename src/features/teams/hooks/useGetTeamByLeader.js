import {useQuery} from "@tanstack/react-query";
import {getTeamByLeader} from "../../../services/apiTeams.js";

export function useGetTeamByLeader(leaderId) {
    const {isPending: isFetching, data: team, error} = useQuery({
        queryKey: ["team", leaderId],
        queryFn: () => getTeamByLeader(leaderId)
    });

    return {isFetching, team};
}