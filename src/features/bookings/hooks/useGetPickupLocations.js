import {useQuery} from "@tanstack/react-query";
import {getPickupLocations} from "../../../services/apiPickupLocations.js";

/**
 * Custom React hook to fetch pickup locations data.
 * uses getPickupLocations function to fetch data from the backend through REST API
 *
 * @return {Object} Object containing fetch status and pickup locations data
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function  useGetPickupLocations() {
    const {isPending: isFetching, data: pickupLocations, error} = useQuery({
        queryKey: ["pickupLocations"],
        queryFn: getPickupLocations
    });

    return {isFetching, pickupLocations}
}