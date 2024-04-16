import Table from "../../ui/tables/Table.jsx";
import ActionMenu from "../../ui/modals/ActionMenu.jsx";
function UserRow({user}) {

    const {id, firstName, lastName, email, phoneNumber, role, photo} = user;

    return (
        <Table.Row>
            <Table.Tdata tdataStyles=""
                graphic={
                    <div className="h-9 w-full max-w-9 flex-shrink-0">
                        <img src={photo} alt="profile-photo"/>
                    </div>
                }>
                {firstName + " " + lastName}
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden xl:block text-center">{email}</Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center">{phoneNumber}
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center">{role}</Table.Tdata>
            <Table.Tdata tdataStyles="justify-center">
                <ActionMenu id={id} />
            </Table.Tdata>
        </Table.Row>
    );
}


export default UserRow;


