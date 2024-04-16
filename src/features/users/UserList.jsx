import {useNavigate} from "react-router-dom";

import Heading from "../../ui/Heading.jsx";

import {users} from "../../assets/data/uers.js";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {ButtonGroup, AddButton} from "../../ui/buttons/Button.jsx";
import MinSearchBar from "../../ui/forms/MinSearchBar.jsx";
import Table from "../../ui/tables/Table.jsx";
import UserRow from "./UserRow.jsx";
import {useGetAllUsers} from "../auth/hooks/useGetAllUsers.js";

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
    const navigate = useNavigate()
    const {isFetching, users: data } = useGetAllUsers();
    console.log(data);
    const handleClick = () => {
        navigate("/users/create-user", {replace: true});
    }
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
                    render={(user) => <UserRow user={user} key={user.id}/>}
                />
            </Table>

        </GeneralContainer>
    );
}

export default UserList;