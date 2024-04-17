import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast"
import {addUpdatePickupLocation} from "../../../services/apiPickupLocations.js";

/**
 * Custom React hook for adding a pickup location.
 * uses addUpdatePickupLocation function to send data to the backend through REST API.
 *
 * @return {Object} Object containing the processing state (isAdding)
 * and mutation function to be executed (addPickupLocation)
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useAddPickupLocation() {
   const queryClient = useQueryClient();
   const {mutate: addPickupLocation, isPending: isAdding} = useMutation({
       mutationFn: addUpdatePickupLocation,
       onSuccess: () => {
           toast.success("Pickup Location Added successfully");
           queryClient.invalidateQueries({queryKey: ["pickupLocations"]});
       },
       onError: (error) => {
           toast.error(error.message);
       }
   })

    return {isAdding, addPickupLocation}
}