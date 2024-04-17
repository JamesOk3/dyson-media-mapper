import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteCategory as deleteCategoryApi} from "../../../services/apiCategories.js";

/**
 * Function hook for deleting a category.
 * uses deleteCategory function to update the backend through REST API.
 *
 * @return {Object} Object containing isDeleting(boolean) status and deleteCategory(function)
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useDeleteCategory() {
    const queryClient = useQueryClient();
    const {isPending: isDeleting, mutate: deleteCategory} = useMutation({
        mutationFn: deleteCategoryApi,
        onSuccess: () => {
            toast.success("Category deleted successfully");
            queryClient.invalidateQueries({queryKey: ["categories"]});
        },
        onError: (error) => toast.error(error.message),
    });

    return {isDeleting, deleteCategory};
}