import {useContext} from "react";
import {PermissionStore} from "./PermissionProvider.jsx";

/*export default function withUserPermission(Component, permission) {
    return function WithUserPermission(props) {
        const { userPermission } = useContext(PermissionStore);
        if (!userPermission[permission]) return null;
        return <Component {...props} />
    };
}*/

/*export default function withUserPermission(Component, permission) {
    return function WithUserPermission(props) {
        const { userPermission } = useContext(PermissionStore);

        if (!userPermission[permission]) return null;
        return <Component {...props} />
    };
}*/


export default function withUserPermission(Component, permission) {
    return function WithUserPermission(props) {
        const permissionStore = useContext(PermissionStore);

        if (!permissionStore) {
            throw new Error("PermissionStore not found");
        }

        const { userPermission } = permissionStore;

        if (!userPermission || !userPermission[permission]) {
            return null;
        }

        return <Component {...props} />;
    };
}

