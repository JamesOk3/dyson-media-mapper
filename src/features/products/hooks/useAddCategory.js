import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateCategory} from "../../../services/apiCategories.js";
import toast from "react-hot-toast";

/**
 * Custom React hook for adding a new category.
 * uses addUpdateCategory function to send data to the backend through REST API.
 *
 * @return {object} Object containing addCategory function and  a boolean indicating if the adding operation is pending
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useAddCategory() {
    const queryClient = useQueryClient();
    const {mutate: addCategory, isPending: isAdding} = useMutation({
        mutationFn: addUpdateCategory,
        onSuccess: () => {
            toast.success("Category Added successfully");
            queryClient.invalidateQueries({queryKey: ["categories"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });
    return {isAdding, addCategory};
}