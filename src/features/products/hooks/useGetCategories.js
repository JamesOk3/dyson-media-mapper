import {useQuery} from "@tanstack/react-query";
import {getCategories} from "../../../services/apiCategories.js";

export function useGetCategories() {
    const {isPending: isFetchingCategories, data: categories, error} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    return {isFetchingCategories, categories}
}