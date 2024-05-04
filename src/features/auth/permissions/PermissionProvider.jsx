import {createContext, useEffect, useState} from "react";
import {useUser} from "../hooks/useUser.js";


export const PermissionStore =  createContext({userPermission: ""});

 function PermissionProvider({ children }) {
    const { appRole } = useUser();
    const [userPermission, setUserPermission] = useState(appRole);

    useEffect(() => {
        setUserPermission(appRole);
    }, [appRole]);

    return (
        <PermissionStore.Provider value={ userPermission }>
            {children}
        </PermissionStore.Provider>
    );
}
export default PermissionProvider;