import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../../../services/apiAuth.js";

export function useUser() {
    const {isPending, data: user} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    // if (!user) return {isPending, user: "", isAuthenticated: false};

    return {isPending, user, isAuthenticated: user?.role === "authenticated"};
}