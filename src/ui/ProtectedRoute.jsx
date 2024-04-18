import {useUser} from "../features/auth/hooks/useUser.js";
import Spinner from "./spinners/Spinner.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

/**
 * Load the authenticated user and redirect to login if not authenticated.
 *
 * @param {Object} children - The components to render if authenticated.
 * @return {JSX.Element} The rendered components.
 *
 * @author James M Kambanga
 * Date: April 16, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function ProtectedRoute({children}) {
    const navigate = useNavigate();

    // load the authenticated user
    const {isPending, isAuthenticated} = useUser();

    // if not authenticated, redirect to login (navigate can only be called inside another function)

    useEffect(function() {
        if(!isAuthenticated && !isPending) {
            navigate("/login", {replace: true});
        }

    }, [isAuthenticated, isPending, navigate]);

    if (isPending) {
        return (
            <div className="flex items-center justify-center h-screen bg-graydark" >
                <Spinner/>
            </div>
        )
    }

    if (isAuthenticated) return (<>{children}</>);
}

export default ProtectedRoute;