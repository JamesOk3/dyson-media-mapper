import {useQuery} from "@tanstack/react-query";
import {getRoles} from "../../../services/apiRoles.js";

export function useRoles() {
    const {isPending: isFetching, data: roles} = useQuery({
        queryKey: ["roles"],
        queryFn: getRoles,
    });

    return {isFetching, roles}
}