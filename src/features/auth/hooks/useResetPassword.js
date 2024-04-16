import toast from "react-hot-toast";
import {resetPassword as resetPasswordApi} from "../../../services/apiAuth.js";
import {useMutation} from "@tanstack/react-query";


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