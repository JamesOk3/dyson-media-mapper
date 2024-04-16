
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import {AddButton, ButtonGroup} from "../../ui/buttons/Button.jsx";
import Modal from "../../ui/modals/Modal.jsx";
import PickupLocationsForm from "./PickupLocationsForm.jsx";
import MinSearchBar from "../../ui/forms/MinSearchBar.jsx";
import Table from "../../ui/tables/Table.jsx";
import {useGetPickupLocations} from "./hooks/useGetPickupLocations.js";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import PickupLocationRow from "./PickupLocationRow.jsx";
import {useState} from "react";


function PickupLocationList() {
    const [editLocation, setEditLocation] = useState("");

    const {isFetching, pickupLocations: locations} = useGetPickupLocations();

    if (isFetching) return <Spinner />

    if (!locations) return <Empty resourceName="Pickup Locations could not be fetched" />

    return (
        <GeneralContainer className="max-w-6xl mx-auto" >
            <ButtonGroup>
                <MinSearchBar />
                <Modal>
                    <Modal.Open opens="location-form">
                        <AddButton label="Add Location" />
                    </Modal.Open>
                    <Modal.Window name="location-form" >
                        <PickupLocationsForm />
                    </Modal.Window>
                </Modal>
            </ButtonGroup>
            <Heading title="Users List" />
            <Table >
                <Table.Header>
                    <Table.Thead theadStyles="">Address</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Postcode</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">City</Table.Thead>
                    <Table.Thead theadStyles="hidden xl:block text-center">Country</Table.Thead>
                    <Table.Thead theadStyles="text-center">Action</Table.Thead>
                </Table.Header>

                <Table.Body
                    data={locations}
                    render={(location) => (
                        <PickupLocationRow
                            key={location.id}
                            editLocation={editLocation}
                            setEditLocation={setEditLocation}
                            location={location}/>
                    )}/>
            </Table>

        </GeneralContainer>


    );
}

export default PickupLocationList;