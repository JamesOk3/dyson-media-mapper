import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import {errorStyles, selectStyles, SelectWithIcon, styles} from "../../ui/forms/FormInputs.jsx";
import Icons from "../../ui/Icons.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useForm} from "react-hook-form";
import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import {useGetTeamByLeader} from "../teams/hooks/useGetTeamByLeader.js";
import {useUser} from "../auth/hooks/useUser.js";
import {useGetTeamEvents} from "../events/hooks/useGetTeamEvents.js";
import {useGetProducts} from "../products/hooks/useGetProducts.js";
import {useGetPickupLocations} from "./hooks/useGetPickupLocations.js";
import {useCreateBooking} from "./hooks/useCreateBooking.js";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

/**
 * Renders a form for requesting bookings.
 *
 * @return {JSX.Element} The form component.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function RequestForm() {
    const { user } = useUser();
    const {team} = useGetTeamByLeader(user?.id);
    const {teamEvents} = useGetTeamEvents(team?.id);
    const {products} = useGetProducts()
    const {pickupLocations} = useGetPickupLocations();

    const {isCreating, createBooking} = useCreateBooking()
    const isWorking = isCreating;

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    function onSubmit(data) {
        const booking = {
            ...data,
            createdBy: user?.id,
            teamId: team?.id,
            status: "pending",
        }
        createBooking(booking, {
            onSuccess: () => {
                reset();
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexContainer>
                <FlexItem>
                    <FormRow id="event" error={errors.eventId?.message}>
                        <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                            <select id="event" name="event" disabled={isWorking}
                                    aria-placeholder="Select Event"
                                    className={`${errors.eventId ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                    {...register("eventId", {required: "This field is required"})}>

                                <option value="" className="text-body dark:text-bodydark">Select Event</option>
                                {teamEvents?.map((event) => (
                                    <option key={event.id} value={event.id}
                                            className="text-body dark:text-bodydark">{event.eventName}</option>
                                ))}
                            </select>
                        </SelectWithIcon>
                    </FormRow>
                </FlexItem>
                <FlexItem>
                    <FormRow id="product" error={errors.productId?.message}>
                        <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                            <select id="product" name="product" disabled={isWorking}
                                    aria-placeholder="Select product"
                                    className={`${errors.eventId ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                    {...register("productId", {required: "This field is required"})}>

                                <option value="" className="text-body dark:text-bodydark">Select product</option>
                                {products?.map((product) => (
                                    <option key={product.id} value={product.id}
                                            className="text-body dark:text-bodydark">{product.name}</option>
                                ))}
                            </select>
                        </SelectWithIcon>
                    </FormRow>
                </FlexItem>
                <FlexItem>
                    <FormRow id="quantity" error={errors.quantity?.message}>
                        <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                            <select id="quantity" name="quantity" disabled={isWorking}
                                    aria-placeholder="Select quantity"
                                    className={`${errors.quantity ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                    {...register("quantity", {required: "This field is required"})}>
                                {[...Array(5)].map((_, i) =>
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )}
                            </select>
                        </SelectWithIcon>
                    </FormRow>
                </FlexItem>
            </FlexContainer>
            <FlexContainer>
                <FlexItem>
                    <FormRow id="remarks" error={errors.remarks?.message}
                             icon={<Icons id="pen" width="20" height="20" viewBox="0 0 20 20"/>}>
                             <textarea className={`${errors.remarks ? errorStyles : ''} ${styles}`}
                                       name="remarks" id="remarks" rows="4"
                                       placeholder="Remarks"
                                       {...register("remarks")}>
                            </textarea>
                    </FormRow>
                </FlexItem>
                <FlexItem>
                    <FormRow id="location" error={errors.pickupLocation?.message}>
                        <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                            <select id="location" name="location" disabled={isWorking}
                                    aria-placeholder="Pickup Location"
                                    className={`${errors.eventId ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                    {...register("pickupLocation", {required: "This field is required"})}>

                                <option value="" className="text-body dark:text-bodydark">Pickup Location</option>
                                {pickupLocations?.map((location) => (
                                    <option key={location.id} value={location.id}
                                            className="text-body dark:text-bodydark">{`${location.city}, ${location.postcode}`}</option>
                                ))}
                            </select>
                        </SelectWithIcon>
                    </FormRow>
                    <ButtonGroup>
                        <Button disabled={isWorking} type="reset" variation="secondary" size="small">Cancel</Button>
                        <Button disabled={isWorking} type="submit" variation="primary" size="small">
                            {isWorking ? <SpinnerMin label="Saving..."/> : "Submit"}
                        </Button>
                    </ButtonGroup>
                </FlexItem>

            </FlexContainer>

        </form>
    );
}

export default RequestForm;
