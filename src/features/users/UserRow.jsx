import Table from "../../ui/tables/Table.jsx";
import ActionMenu from "../../ui/modals/ActionMenu.jsx"
import defaultUser from "../../images/user/default-user.jpeg";
import UserForm from "./UserForm.jsx";

/**
 * Generate a table row for a user with their information.
 *
 * @param {Object} user - The user object containing id, firstname, lastname, email, phonenumber, avatar, and gender
 * @return {JSX.Element} The JSX element representing the user table row
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function UserRow({user, userToEdit, setUserToEdit}) {

    const {id, firstname, lastname, email, phonenumber, avatar, role} = user;

    function handleUserEdit() {
        setUserToEdit(user)
        console.log(user);
    }

    return (
        <>
            <Table.Row>
                <Table.Tdata tdataStyles=""
                    graphic={
                        <div className="h-9 w-full max-w-9 flex-shrink-0">
                            <img src={avatar} alt="profile-photo"
                                 onError={e => e.target.src = defaultUser}
                            />
                        </div>
                    }>
                    {firstname + " " + lastname}
                </Table.Tdata>
                <Table.Tdata tdataStyles="hidden xl:block text-center">{email}</Table.Tdata>
                <Table.Tdata tdataStyles="hidden sm:block text-center">{phonenumber}
                </Table.Tdata>
                <Table.Tdata tdataStyles="hidden sm:block text-center">{role}</Table.Tdata>
                <Table.Tdata tdataStyles="justify-center">
                    <ActionMenu id={id}
                        onEdit={handleUserEdit}
                    />
                </Table.Tdata>
            </Table.Row>
            {userToEdit && id === userToEdit.id && <UserForm user={user} setUserToEdit={setUserToEdit} />}

        </>
    );
}


export default UserRow;


