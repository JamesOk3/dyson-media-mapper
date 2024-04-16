import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout as logoutApi} from "../../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: logout, isPending} = useMutation({
        mutationFn: () => logoutApi(),
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", {replace: true})
            toast.success("Logged out successfully");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Failed to logout");
        }
    })

    return {logout, isPending};
}