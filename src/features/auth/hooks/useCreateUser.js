import {useMutation} from "@tanstack/react-query";
import {createUser as createUserApi} from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

/**
 * Custom hook for creating a new user
 * uses createUser function to send data to the backend through REST API.
 *
 * @return {Object} Object containing createUser function and  a boolean indicating if the creating operation is pending
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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