import {useQuery} from "@tanstack/react-query";
import {getCurrentUser, getUserById} from "../../../services/apiAuth.js";


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
    // const {user: user2} = useAppRole();
    // const appRole = user2?.appRole;

    const {isPending, data: user} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });
    const {data: user2} = useQuery({
        queryKey: ["role"],
        queryFn: () => getUserById(user?.id),
    });
    // const appRole = user?.user_metadata.role?.toLowerCase();
    const appRole = user2?.role?.toLowerCase();

    return {isPending,  user, appRole, isAuthenticated: user?.role === "authenticated"};
}