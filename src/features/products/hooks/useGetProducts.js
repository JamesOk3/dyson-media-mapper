import {useQuery} from "@tanstack/react-query";
import {getProducts} from "../../../services/apiProducts.js";

/**
 * Custom React hook to fetch products data.
 * uess getProducts function to fetch data from the backend through REST API
 *
 * @return {Object} Object containing fetching status and products data
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetProducts() {
    const {isPending: isFetchingProducts, data: products, error} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })

    return {isFetchingProducts, products}
}