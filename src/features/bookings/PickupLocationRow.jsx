import Table from "../../ui/tables/Table.jsx";
import ActionMenu from "../../ui/modals/ActionMenu.jsx";
import {useDeletePickupLocation} from "./hooks/useDeletePickupLocation.js";
import PickupLocationsForm from "./PickupLocationsForm.jsx";

/**
 * Generates a row component for displaying a pickup location with address, postcode, city, and country.
 *
 * @param {Object} location - The pickup location object containing id, address, postcode, city, and country.
 * @param {Object} editLocation - The location object to be edited.
 * @param {function} setEditLocation - The function to set the location item to be edited.
 * @return {JSX.Element} The JSX element representing the pickup location row.
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function PickupLocationRow({location, editLocation, setEditLocation}) {
    const { isDeleting, deletePickupLocation: deleteLocation } = useDeletePickupLocation();

    function handleLocationEdit() {
       setEditLocation(location);
    }

    const {id, address, postcode, city, country} = location;

    return (
        <>
        <Table.Row>
            <Table.Tdata tdataStyles="">
                {address}
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center  ">
                {postcode}
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center ">
                {city}
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden xl:block text-center ">
                {country}
            </Table.Tdata>
            <Table.Tdata tdataStyles="justify-center">
                <ActionMenu id={id}
                             onEdit={handleLocationEdit}
                             onDelete={deleteLocation}
                             isDeleting={isDeleting}
                />
            </Table.Tdata>
        </Table.Row>
            {editLocation && id===editLocation.id && (
                <PickupLocationsForm location={editLocation} setEditLocation={setEditLocation} />
            )}
        </>
    );
}

export default PickupLocationRow;