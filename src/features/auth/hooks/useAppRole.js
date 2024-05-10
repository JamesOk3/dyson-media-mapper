import supabase from "../../../services/supabase.js";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode"

/**
 * Custom hook for managing user session and role.
 *
 * @returns {Object} An object containing the session and user data.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export function useAppRole() {
    const [session, setSession] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        function saveSession(session) {
            setSession(session)
            const currentUser = session?.user
            if (session) {
                const jwt = jwtDecode(session.access_token)
                currentUser.appRole = jwt.user_role
            }
            setUser(currentUser ?? null)
        }

        supabase.auth.getSession().then(({ data: { session } }) => saveSession(session))
    }, [])

    return {session, user};
}
