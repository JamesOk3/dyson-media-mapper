import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdatePickupLocation } from "../../../services/apiPickupLocations.js";

/**
 * Generate a custom hook for editing the pickup location.
 *
 * @return {Object} Object containing information about the editing state and the function to edit the pickup location
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useEditPickupLocation() {
    const queryClient = useQueryClient();
    const {mutate: editPickupLocation, isPending: isEditing} = useMutation({
        mutationFn: ({newLocationData, id}) => addUpdatePickupLocation(newLocationData, id),
        onSuccess: () => {
            toast.success("Pickup Location Updated successfully");
            queryClient.invalidateQueries({queryKey: ["pickupLocations"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isEditing, editPickupLocation}
}