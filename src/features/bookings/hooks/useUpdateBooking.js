import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateBooking as updateBookingApi} from "../../../services/apiBookings.js";
import toast from "react-hot-toast";

/**
 * Custom hook for updating a booking.
 *
 * @return {Object} Object containing the updateBooking function and a boolean indicating if the update operation is pending.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useUpdateBooking() {
    const queryClient = useQueryClient();
    const {mutate: updateBooking, isPending: isUpdating} = useMutation({
        mutationFn: ({id, newBookingData}) => updateBookingApi(id, newBookingData),
        onSuccess: () => {
            toast.success("Booking Updated successfully");
            queryClient.invalidateQueries({queryKey: ["bookings"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return {updateBooking, isUpdating}
}
