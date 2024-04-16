import {getAllUsers} from "../../../services/apiAuth.js";
import {useQuery} from "@tanstack/react-query";


export function useGetAllUsers() {
    const {isPending: isFetching, data: users, error} = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers
    })

    return {isFetching, users}
}