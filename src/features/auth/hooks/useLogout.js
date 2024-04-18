import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout as logoutApi} from "../../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Custom hook for handling user logout functionality.
 *
 * uses logout function that invalidate the logged-in user session
 *
 * @return {Object} Object containing the logout function and a boolean indicating if the logout operation is pending.
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

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