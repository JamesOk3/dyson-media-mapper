import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateUserTeam as updateUserTeamApi} from "../../../services/apiUser.js";
import toast from "react-hot-toast";

/**
 * Custom hook for updating a user's team.
 *
 * @return {Object} An object containing the `updateUserTeam` function and `isUpdating` boolean.
 * The `updateUserTeam` function takes an object with `id` and `teamId` properties and updates the user's team.
 * The `isUpdating` boolean indicates whether the update operation is currently in progress.
 *
 * @throws {Error} If the update operation fails.
 *
 * @author James M Kambanga
 * Date: April 25, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useUpdateUserTeam() {
    const queryClient = useQueryClient();
    const { mutate: updateUserTeam, isPending: isUpdating } = useMutation( {
        mutationFn: ({id, teamId}) => updateUserTeamApi(id, teamId),
        onSuccess: () => {
            toast.success("User record updated successfully");
            queryClient.invalidateQueries({ queryKey: ["teams"] });
        }
    })

    return { updateUserTeam, isUpdating }
}