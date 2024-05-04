import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateTeam as updateTeamApi} from "../../../services/apiTeams.js";
import toast from "react-hot-toast";

/**
 *  Custom hook for updating a team record.
 *
 * @return {Object} An object with the following properties:
 *   - `updateTeam` (function): A function that updates a team record.
 *   - `isUpdating` (boolean): Indicates if a team update is in progress.
 *
 * @author James M Kambanga
 * Date: April 23, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useUpdateTeam() {
    const queryClient = useQueryClient();
    const { mutate: updateTeam, isPending: isUpdating } = useMutation( {
        mutationFn: ({id, teamData}) => updateTeamApi(id, teamData),
        onSuccess: () => {
            toast.success("Team record updated successfully");
            queryClient.invalidateQueries({ queryKey: ["teams"] });
        }
    })

    return { updateTeam, isUpdating }
}