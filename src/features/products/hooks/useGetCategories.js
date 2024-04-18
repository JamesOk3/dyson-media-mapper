import {useQuery} from "@tanstack/react-query";
import {getCategories} from "../../../services/apiCategories.js";

/**
 * Custom React Hook to fetch and return a list of categories.
 *
 * @return {object} Object containing information about the fetching status and categories data
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useGetCategories() {
    const {isPending: isFetchingCategories, data: categories, error} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    return {isFetchingCategories, categories}
}