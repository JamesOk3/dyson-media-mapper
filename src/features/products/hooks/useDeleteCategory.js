import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteCategory as deleteCategoryApi} from "../../../services/apiCategories.js";

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