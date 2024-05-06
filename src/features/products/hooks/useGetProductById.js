import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getProductById} from "../../../services/apiProducts.js";

export function useGetProductById() {
    const {productId} = useParams();

    const {isPending: isFetchingProduct, data: product} = useQuery({
        queryKey: ["prodcut", productId],
        queryFn: () => productId ? getProductById(productId) : {},
    })

    return {isFetchingProduct, product}
}