import {useMutation} from "@tanstack/react-query";
import {createUser as createUserApi} from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useCreateUser() {
    const {mutate: createUser, isPending} = useMutation({
        mutationFn: createUserApi,
        onSuccess: () => {
            toast.success("User created successfully. Verification email sent to user's email address.");
        },
        onError: (error) => {
            console.log(error);
            toast.error(error.message);
        }
    });

    return {createUser, isPending};
}