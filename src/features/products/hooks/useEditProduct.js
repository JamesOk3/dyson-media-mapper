import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateProduct} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

/**
 * Custom hook for editing a product. It utilizes useMutation to update a product
 * and handles success and error cases.
 *
 * @return {Object} Object containing isEditing flag and editProduct function
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useEditProduct() {
    const queryClient = useQueryClient();
    const {mutate: editProduct, isPending: isEditing} = useMutation({
        mutationFn: ({newProductData, id}) => addUpdateProduct(newProductData, id),
        onSuccess: () => {
            toast.success("Product Updated successfully");
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });
    return {isEditing, editProduct};
}