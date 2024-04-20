
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {addUpdateEvent} from "../../../services/apiEvents.js";

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