import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdatePickupLocation } from "../../../services/apiPickupLocations.js";

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