import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {errorStyles, selectStyles, SelectWithIcon, styles} from "../../ui/forms/FormInputs.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import Icons from "../../ui/Icons.jsx";

import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import DatePicker from "../../ui/forms/DatePicker.jsx";
import AddressForm from "../../ui/forms/AddressForm.jsx";
import {useAddEvent} from "./hooks/useAddEvent.js";
import {useEditEvent} from "./hooks/useEditEvent.js";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";
import Row from "../../ui/containers/Row.jsx";
import {useNavigate} from "react-router-dom";

const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

function EventForm({ event = {} }) {
    const navigate = useNavigate();
    const {id: eventId, ...eventValues} = event;
    const isEditSession = Boolean(eventId);

    const {register, handleSubmit, control, formState, reset} = useForm({
        defaultValues: isEditSession ? eventValues : {},
    });
    const {errors} = formState

    const {isAdding, addEvent} = useAddEvent();
    const {isEditing, editEvent} = useEditEvent();
    const isWorking = isAdding || isEditing;

    function onSubmit(data) {
        if (isEditSession) {
            editEvent({
                newEventData: data,
                id: eventId
            },{
                onSuccess: () => {
                    reset();
                    navigate("/events", {replace: true});
                }
            });
        } else {
            addEvent(data, {
                onSuccess: () => {
                    reset()
                    navigate("/events", {replace: true});
                }
            });
        }
    }

    return (
        <Row>
            <GeneralContainer>
                <Heading title="Create an Event" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormRow label="Event Name" id="eventName" error={errors.eventName?.message}>
                        <input type="text" name="eventName" id="eventName" placeholder="Enter event name"
                               disabled={isWorking}
                               className={`${errors.eventName ? errorStyles : ''} ${styles} !pl-4.5`}
                               {...register("eventName", {required: "This field is required"})}/>
                    </FormRow>

                    <FormRow label="Event Description" id="description" error={errors.description?.message}
                             icon={<Icons id="pen" width="20" height="20" viewBox="0 0 20 20"/>}>
                             <textarea className={`${errors.description ? errorStyles : ''} ${styles}`}
                                       name="description" id="description" rows="3"
                                       placeholder="Add more details"
                                       {...register("description")}>
                            </textarea>
                    </FormRow>

                    <FlexContainer>
                        <FlexItem>
                            <FormRow label="Event Date" id="eventDate" error={errors.eventDate?.message}
                                     icon={<Icons id="calendar" />}>
                                <DatePicker id="eventDate" name="eventDate" register={register} control={control}/>
                            </FormRow>
                        </FlexItem>
                        <FlexItem>
                            <FlexContainer>
                                <FlexItem>
                                    <FormRow label="Start Time" id="startTime" error={errors.startTime?.message}>
                                        <input type="time" name="startTime" id="startTime"
                                               disabled={isWorking}
                                               className={`${errors.startTime ? errorStyles : ''} ${styles} !pl-4.5` }
                                               {...register("startTime", {required: "This field is required"})}  />
                                    </FormRow>
                                </FlexItem>
                                <FlexItem>
                                    <FormRow label="End Time" id="endTime" error={errors.endTime?.message}>
                                        <input type="time" name="endTime" id="endTime"
                                               disabled={isWorking}
                                               className={`${errors.endTime ? errorStyles : ''} ${styles} !pl-4.5` }
                                               {...register("endTime", {required: "This field is required"})}/>
                                    </FormRow>
                                </FlexItem>
                            </FlexContainer>
                        </FlexItem>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexItem>
                            <FormRow label="Capacity" id="capacity" error={errors.capacity?.message}>
                                <input type="number" name="capacity" id="capacity" placeholder="Event capacity"
                                       disabled={isWorking}
                                       className={`${errors.capacity ? errorStyles : ''} ${styles} !pl-4.5`}
                                       { ...register("capacity", {required: "This field is required",
                                           validate: (value) => value >= 0 || "Capacity must be greater than 0",
                                       })}/>
                            </FormRow>
                        </FlexItem>
                        <FlexItem>
                            <FormRow label="Assign Team" id="assignedTeam" >
                                <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                                    <select id="assignedTeam" name="assignedTeam"
                                            aria-placeholder="Select Team"
                                            className={`${errors.country ? 'border-rose-300' : ''} ${selectStyles} !pl-4.5`}
                                            {...register("assignedTeam")}>

                                        <option value="" className="text-body dark:text-bodydark">Select Team</option>
                                        {teams?.map((option, index) => (
                                            <option key={option.id} value={index}
                                                    className="text-body dark:text-bodydark">{option}
                                            </option>
                                        ))}
                                    </select>
                                </SelectWithIcon>

                            </FormRow>
                        </FlexItem>
                    </FlexContainer>

                    {/*<FormRow label="Event Location" id="eventLocation"
                         icon={<Icons id="search-icon" width="20" height="20" viewBox="0 0 20 20"/>}>
                    <input type="search" name="eventLocation" id="eventLocation" placeholder="Search Location"
                           className={`${errors.eventLocation ? errorStyles : ''} ${styles}` }/>
                    <ButtonWithIcon name="Add Location Details" type="add"/>
                </FormRow>*/}
                    <GeneralContainer className="mb-7">
                        <AddressForm register={register} errors={errors}/>
                    </GeneralContainer>

                    <ButtonGroup>
                        <Button disabled={isWorking} type="reset" variation="secondary" size="small">Cancel</Button>
                        <Button disabled={isWorking} size="small" type="submit" variation="primary">
                            {isWorking ? <SpinnerMin label="Saving..."/> : (`${isEditSession ? 'Update' : 'Add'} Event`) }
                        </Button>
                    </ButtonGroup>

                </form>
            </GeneralContainer>
        </Row>

    );
}

export default EventForm;