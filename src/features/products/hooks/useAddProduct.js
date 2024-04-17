import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateProduct} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

/**
 * Custom hook to add a new product.
 * uses addUpdateProduct function to send data to the backend through REST API.
 *
 * @return {object} Object containing addProduct function and a boolean indicating if the adding operation is pending
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useAddProduct() {
    const queryClient = useQueryClient();

    const {mutate: addProduct, isPending: isAdding} = useMutation({
        mutationFn: addUpdateProduct,
        onSuccess: () => {
            toast.success("Product Added successfully");
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
        onError: (error) => {
            console.log(error);
            toast.error(error.message);
        }
    });
    return {isAdding, addProduct};
}