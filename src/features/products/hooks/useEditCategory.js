import {addUpdateCategory} from "../../../services/apiCategories.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

/**
 * Custom React hook for editing a category.
 * uses addUpdateCategory function to update data to the backend through REST API.
 *
 * @return {Object} Object containing editCategory function and isEditing boolean indicating if the editing operation is pending
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useEditCategory() {

    const queryClient = useQueryClient();
    const {mutate: editCategory, isPending: isEditing} = useMutation({
        mutationFn: ({newCategoryData, id}) => addUpdateCategory(newCategoryData, id),
        onSuccess: () => {
            toast.success("Category Updated successfully");
            queryClient.invalidateQueries({queryKey: ["categories"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });
    return {isEditing, editCategory};
}