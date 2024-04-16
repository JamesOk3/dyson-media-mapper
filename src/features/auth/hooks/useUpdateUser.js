import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateUser as updateUserApi} from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

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