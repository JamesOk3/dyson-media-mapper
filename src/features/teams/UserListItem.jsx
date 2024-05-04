import {Button} from "../../ui/buttons/Button.jsx";
import {useUpdateUserTeam} from "../users/hooks/useUpdateUserTeam.js";

/**
 * Renders a list item component for a user, with an "Add" button to add the user to a team.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.user - The user object to display in the list item.
 * @param {string} props.teamId - The ID of the team to add the user to.
 * @return {JSX.Element} The rendered list item component.
 *
 * @author James M Kambanga
 * Date: April 25, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function UserListItem({user, teamId}) {
    const { updateUserTeam, isUpdating } = useUpdateUserTeam();

    function handleSubmit() {

        updateUserTeam({
            id: user.id,
            teamId
        })
    }

    return (
        <li className="flex flex-col mt-3 border-b border-slate-200 dark:border-slate-700  text-black dark:text-white">
            <div className="flex items-center justify-between">
                <span>{`${user?.firstname} ${user?.lastname}`} &mdash; {user?.city} </span>
                <Button onClick={handleSubmit} disabled={isUpdating}
                        type="submit" size="small" variation="secondary">
                    Add
                </Button>
            </div>
        </li>
    );
}

export default UserListItem;


