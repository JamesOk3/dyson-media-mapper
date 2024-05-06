import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createUpdateBooking} from "../../../services/apiBookings.js";
import toast from "react-hot-toast";

/**
 * Custom hook for creating a new booking.
 *
 * @return {Object} Object containing createBooking function and a boolean indicating if the creation operation is pending
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useCreateBooking() {
    const queryClient = useQueryClient();
    const {mutate: createBooking, isPending: isCreating} = useMutation({
        mutationFn: createUpdateBooking,
        onSuccess: () => {
            toast.success("Booking created successfully");
            queryClient.invalidateQueries({queryKey: ["bookings"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return {createBooking, isCreating}
}