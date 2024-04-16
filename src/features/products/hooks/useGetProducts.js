import {useQuery} from "@tanstack/react-query";
import {getProducts} from "../../../services/apiProducts.js";

export function useGetProducts() {
    const {isPending: isFetchingProducts, data: products, error} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })

    return {isFetchingProducts, products}
}