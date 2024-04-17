import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deletePickupLocation as deletePickupLocationApi} from "../../../services/apiPickupLocations.js";

/**
 * Custom React hook for deleting a pickup location.
 *
 * @param {function} - Function to delete pickup location from database
 * @return {object} Object containing information about deletion status and function to delete location
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useDeletePickupLocation() {
    const queryClient = useQueryClient();
    const {mutate: deletePickupLocation, isPending: isDeleting} = useMutation({
        mutationFn: deletePickupLocationApi,
        onSuccess: () => {
            toast.success("Pickup Location Deleted successfully");
            queryClient.invalidateQueries({queryKey: ["pickupLocations"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isDeleting, deletePickupLocation}
}