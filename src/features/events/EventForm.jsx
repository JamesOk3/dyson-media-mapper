import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {errorStyles, selectStyles, SelectWithIcon, styles} from "../../ui/forms/FormInputs.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import Icons from "../../ui/Icons.jsx";

import ButtonWithIcon from "../../ui/buttons/ButtonWithIcon.jsx";
import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import DatePicker from "../../ui/forms/DatePicker.jsx";
import AddressForm from "../../ui/forms/AddressForm.jsx";

const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

function EventForm() {
    const {register, handleSubmit, control, formState} = useForm();
    const {errors} = formState;

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <GeneralContainer>
            <Heading title="Create an Event" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Event Name" id="name" error={errors.name?.message}>
                    <input type="text" name="name" id="name" placeholder="Enter event name"
                           // disabled={isWorking}
                           className={`${errors.name ? errorStyles : ''} ${styles} !pl-4.5`}
                           {...register("name", {required: "This field is required"})}/>
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
                            {/*<Input type="date" name="Select Date" />*/}
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Start Time" id="startTime" error={errors.startTime?.message}>
                                    <input type="time" name="startTime" id="startTime"
                                           className={`${errors.startTime ? errorStyles : ''} ${styles} !pl-4.5` }
                                           {...register("startTime", {required: "This field is required"})}  />
                                    {/*<CustomTimePicker/>*/}
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="End Time" id="endTime" error={errors.endTime?.message}>
                                    <input type="time" name="endTime" id="endTime"
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
                                   className={`${errors.capacity ? errorStyles : ''} ${styles} !pl-4.5`}
                                   { ...register("capacity", {required: "This field is required",
                                   validate: (value) => value >= 0 || "Capacity must be greater than 0",
                                   })}/>
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Assign Team" id="team" >
                            <SelectWithIcon icon2={<Icons id="chevron-down"/>}>

                                <select id="team" name="team"
                                        aria-placeholder="Select Team"
                                        className={`${errors.country ? 'border-rose-300' : ''} ${selectStyles} !pl-4.5`}
                                        {...register("team")}>

                                    <option value="" className="text-body dark:text-bodydark">Select Team</option>
                                    {teams?.map((option) => (
                                        <option key={option.id} value={option}
                                                className="text-body dark:text-bodydark">{option}
                                        </option>
                                    ))}
                                </select>
                            </SelectWithIcon>

                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FormRow label="Event Location" id="eventLocation" error={errors.eventLocation?.message}
                         icon={<Icons id="search-icon" width="20" height="20" viewBox="0 0 20 20"/>}>
                    <input type="search" name="eventLocation" id="eventLocation" placeholder="Search Location"
                           className={`${errors.eventLocation ? errorStyles : ''} ${styles}` }
                           {...register("eventLocation", {required: "This field is required"})}/>
                    {/* change component name to make button more general (Join ButtonWithIcon to button*/}
                    <ButtonWithIcon name="Add Location Details" type="add"/>
                </FormRow>
                <GeneralContainer className="mb-7">
                    <AddressForm register={register} errors={errors}/>
                </GeneralContainer>

                <ButtonGroup>
                    <Button type="reset" variation="secondary" size="small">Cancel</Button>
                    <Button type="submit" variation="primary" size="small">Create Event</Button>
                </ButtonGroup>

            </form>
        </GeneralContainer>
    );
}

export default EventForm;