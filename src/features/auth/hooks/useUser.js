import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../../../services/apiAuth.js";

/**
 * Custom hook for managing user session.
 * uses getCurrentUser function to determine if user is authenticated or not
 *
 * @return {Object} Object containing user data and authentication status.
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useUser() {
    const {isPending, data: user} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    // if (!user) return {isPending, user: "", isAuthenticated: false};

    return {isPending, user, isAuthenticated: user?.role === "authenticated"};
}