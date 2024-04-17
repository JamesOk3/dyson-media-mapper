import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteProduct as deleteProductApi} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

/**
 * Custom React hook for deleting a product.
 * use deleteProduct function to update the backend through REST API.
 *
 * @return {Object} Object containing isDeleting(boolean) status and deleteProduct(function)
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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

