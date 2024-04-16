import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateCategory} from "../../../services/apiCategories.js";
import toast from "react-hot-toast";


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