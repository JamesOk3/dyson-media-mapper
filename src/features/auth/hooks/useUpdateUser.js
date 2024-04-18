import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateUser as updateUserApi} from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

/**
 * Custom hook for updating user information.
 * uses updateUser function to send data to the backend through REST API.
 *
 * @return {Object} Object containing updateUser function and isUpdating boolean.
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const {mutate: updateUser, isPending: isUpdating} = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["user"]});
            toast.success("User updated successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {updateUser, isUpdating};
}