import {addUpdateCategory} from "../../../services/apiCategories.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

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