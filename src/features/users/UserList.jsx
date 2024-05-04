import {useNavigate} from "react-router-dom";

import Heading from "../../ui/Heading.jsx";

import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {ButtonGroup, AddButton} from "../../ui/buttons/Button.jsx";
import MinSearchBar from "../../ui/forms/MinSearchBar.jsx";
import Table from "../../ui/tables/Table.jsx";
import UserRow from "./UserRow.jsx";
import {useGetAllUsers} from "../auth/hooks/useGetAllUsers.js";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import {useState} from "react";

/**
 * Renders a table component displaying a list of users.
 *
 * @return {JSX.Element} The JSX element representing the table component
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function UserList() {
    const [ userToEdit, setUserToEdit ]  = useState("");
    const navigate = useNavigate()
    const {isFetching, users } = useGetAllUsers();

    const handleClick = () => {
        navigate("/users/create-user", {replace: true});
    }
    if (isFetching) return <Spinner />
    if (!users.length) return <Empty resourceName="users" />

    return (
        <GeneralContainer >
            <ButtonGroup>
                <MinSearchBar />
                <AddButton onClick={handleClick} label="Add User" />
            </ButtonGroup>
            <Heading title="Users List" />
            <Table cols="4" smCols="8" xlCols="8" >
                <Table.Header>
                    <Table.Thead theadStyles="">Full Name</Table.Thead>
                    <Table.Thead theadStyles="hidden xl:block text-center">Email</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center ">Phone</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Role</Table.Thead>
                    <Table.Thead theadStyles="text-center">Action</Table.Thead>
                </Table.Header>

                <Table.Body
                    data={users}
                    render={(user) => <UserRow key={user.id}
                        user={user}
                        setUserToEdit={setUserToEdit}
                        userToEdit={userToEdit}
                        />}
                />
            </Table>

        </GeneralContainer>
    );
}

export default UserList;