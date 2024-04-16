import {useQuery} from "@tanstack/react-query";
import {getPickupLocations} from "../../../services/apiPickupLocations.js";

export function  useGetPickupLocations() {
    const {isPending: isFetching, data: pickupLocations, error} = useQuery({
        queryKey: ["pickupLocations"],
        queryFn: getPickupLocations
    });

    return {isFetching, pickupLocations}
}