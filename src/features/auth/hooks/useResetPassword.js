import toast from "react-hot-toast";
import {resetPassword as resetPasswordApi} from "../../../services/apiAuth.js";
import {useMutation} from "@tanstack/react-query";

/**
 * Custom hook to handle resetting password functionality.
 *
 * uses the resetPassword function that sends a request for password reset to the backend
 *
 * @return {Object} An object containing the resetPassword function and a boolean indicating if the logout operation is pending.
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useResetPassword() {
    const {mutate: resetPassword, isPending} = useMutation({
        mutationFn: resetPasswordApi,
        onSuccess: () => {
            toast.success("Password reset link successfully sent to your email.");
        },
        onError: (error) => {
            console.log(error);
            toast.error(error.message);
        }
    })

    return {resetPassword, isPending};
}