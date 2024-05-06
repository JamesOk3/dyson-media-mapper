import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateProductQuantity} from "../../../services/apiProducts.js";
import toast from "react-hot-toast";


export function useUpdateQuantity() {
    const queryClient = useQueryClient();
    const {mutate: updateQuantity, isPending: isUpdating} = useMutation({
        mutationFn: ({id, quantity}) => updateProductQuantity({id, quantity}),
        onSuccess: () => {
            toast.success("Product quantity updated successfully");
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return {updateQuantity, isUpdating}
}