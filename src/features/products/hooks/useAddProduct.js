import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addUpdateProduct} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";

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