import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdateEvent} from "../../../services/apiEvents.js";

/**
 * Custom hook that handles editing an event.
 *
 * @return {Object} An object containing the `isEditing` boolean and the `editEvent` function.
 * @return {boolean} `isEditing` - A boolean indicating if the editing operation is pending.
 * @return {function} `editEvent` - A function that handles the editing of an event.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function useEditEvent() {

    const queryClient = useQueryClient();
    const {mutate: editEvent, isPending: isEditing} = useMutation({
        mutationFn: ({eventData, id}) => addUpdateEvent(eventData, id),
        onSuccess: () => {
            toast.success("Event Updated successfully");
            queryClient.invalidateQueries({queryKey: ["event"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isEditing, editEvent};
}