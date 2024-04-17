import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Custom hook for handling user login functionality.
 *
 * uses login function that takes in email and password and validates it with the backend
 *
 * @return {Object} Object containing login function and flag indicating if login is pending
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutate: login, isPending: loggingIn} = useMutation({
        mutationFn: ({email, password}) => loginApi({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/dashboard", {replace: true});
        },
        onError: (error) => {
            console.log(error);
            toast.error("Invalid email or password");
        }
    });

    return {login, loggingIn};
}