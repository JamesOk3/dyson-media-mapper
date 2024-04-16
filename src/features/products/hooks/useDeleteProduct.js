import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteProduct as deleteProductApi} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

export function useDeleteProduct() {
    const queryClient = useQueryClient();
    const {isPending: isDeleting, mutate: deleteProduct} = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () => {
            toast.success("Product deleted successfully");
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
        onError: (error) => toast.error(error.message),
    });

    return {isDeleting, deleteProduct};
}

