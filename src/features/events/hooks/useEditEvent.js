import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdateEvent} from "../../../services/apiEvents.js";


export function useEditEvent() {

    const queryClient = useQueryClient();
    const {mutate: editEvent, isPending: isEditing} = useMutation({
        mutationFn: ({newEventData, id}) => addUpdateEvent(newEventData, id),
        onSuccess: () => {
            toast.success("Event Updated successfully");
            queryClient.invalidateQueries({queryKey: ["events"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isEditing, editEvent};
}