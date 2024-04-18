import AddressForm from "../../ui/forms/AddressForm.jsx";
import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {useForm} from "react-hook-form";
import {useAddPickupLocation} from "./hooks/useAddPickupLocation.js";
import {useEditPickupLocation} from "./hooks/useEditPickupLocation.js";

/**
 * Handles form submission for adding or editing pickup locations.
 *
 * @param {Object} location - The data fetched from API to be edited.
 * @param {function} setEditLocation - The function to set the location item to be edited.
 * @param {function} onCloseModal - The function to close the popup modal form for adding a new location.
 * @return {component} a form for adding or editing pickup locations.
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function PickupLocationsForm({location = {}, setEditLocation, onCloseModal}) {
    const {id: locationId, ...locationValues} = location;
    const isEditSession = Boolean(locationId);

    const {register, handleSubmit, formState, reset} = useForm({
        defaultValues: isEditSession ? locationValues : {},
    });
    const {errors} = formState;

    const {isAdding, addPickupLocation} = useAddPickupLocation();
    const {isEditing, editPickupLocation} = useEditPickupLocation();
    const isWorking = isAdding || isEditing;

    function onSubmit(data) {

        console.log(data);
        if (isEditSession) {
            editPickupLocation({
                newLocationData: data,
                id: locationId,
            }, {
                onSuccess: () => {
                    setEditLocation("");
                }
            });
        } else {
            addPickupLocation(data, {
                onSuccess: () => {
                    reset()
                    onCloseModal();
                }
            });
        }
    }

    return (
        <GeneralContainer className="!px-1">
            <form onSubmit={handleSubmit(onSubmit)}>
                <AddressForm title={isEditSession ? "" : "Add New Location"} register={register} errors={errors} />
                <ButtonGroup>
                    <Button type="reset" variation="secondary" size="small" disabled={isWorking}
                            onClick={onCloseModal}>
                        Cancel
                    </Button>
                    <Button type="submit" variation="primary" size="small" disabled={isWorking}>
                        {isWorking ? <SpinnerMin/> : (isEditSession ? "Update Location" : "Add Location")}
                    </Button>
                </ButtonGroup>
            </form>
        </GeneralContainer>
    )
}

export default PickupLocationsForm;