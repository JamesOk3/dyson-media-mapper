
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdateEvent} from "../../../services/apiEvents.js";
/**
 * Custom hook that provides a function to add an event and a boolean indicating if the addition is pending.
 *
 * @return {Object} An object containing the `addEvent` function and the `isAdding` boolean.
 *
 * @author James M Kambanga
 * Date: April 19, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useAddEvent() {

    const queryClient = useQueryClient();

    const {mutate: addEvent, isPending: isAdding} = useMutation({
        mutationFn: addUpdateEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["events"]});
            toast.success("Event Added successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {addEvent, isAdding};
}