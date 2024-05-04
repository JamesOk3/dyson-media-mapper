import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addTeam as addTeamApi} from "../../../services/apiTeams.js";
import toast from "react-hot-toast";

/**
 * Custom hook that provides a function to add a team and a boolean indicating if the addition is pending.
 *
 * @return {Object} An object containing the `addTeam` function, the `isAdding` boolean, and the `teamData` object.
 * - `addTeam`: A function that adds a team using the `addTeamApi` mutation function.
 * - `isAdding`: A boolean indicating if the addition is pending.
 * - `teamData`: The data of the added team.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useAddTeam() {
    const queryClient = useQueryClient();

    const {mutate: addTeam, isPending: isAdding, data: teamData} = useMutation({
        mutationFn: addTeamApi,
        onSuccess: () => {
            toast.success("Team Added successfully");
            queryClient.invalidateQueries({queryKey: ["teams"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isAdding, addTeam, teamData};
}