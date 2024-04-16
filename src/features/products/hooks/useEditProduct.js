import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateProduct} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

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