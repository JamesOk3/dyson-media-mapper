
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";

import {useForm} from "react-hook-form";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import Heading from "../../ui/Heading.jsx";

import {Button} from "../../ui/buttons/Button.jsx";
import { styles} from "../../ui/forms/FormInputs.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import UserListItem from "./UserListItem.jsx";
import {useGetUnassignedUsers} from "./hooks/useGetUnassignedUsers.js";
import {useAddTeam} from "./hooks/useAddTeam.js";
import LeaderForm from "./LeaderForm.jsx";
import {useState} from "react";

/**
 * Renders the AddTeam component with the form to create a new team.
 *
 * @param {Object} formHidden - A boolean indicating whether the form is hidden.
 * @param {Function} hideForm - A function to hide the form.
 * @return {JSX.Element} The rendered AddTeam component.
 *
 * @author James M Kambanga
 * Date: April 24, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function AddTeam({formHidden, hideForm}) {
    const [showLeaderForm, setShowLeaderForm] = useState(false);
    const {isFetching: isFetchingUsers, users } = useGetUnassignedUsers();
    const { isAdding: isAddingTeam, addTeam, teamData } = useAddTeam();

    const { id: teamId, ...teamValues } = teamData || {};
    const isTeamAdded = Boolean(teamId);
    console.log(teamData);

    const {register, handleSubmit, formState, reset} = useForm();
    const {errors} = formState

    function onSubmit(data) {
        console.log(data);
        addTeam(data, {
            onSuccess: () => {
                setShowLeaderForm(true);
            }
        });
    }

    return (
        <div className={`${formHidden ? 'hidden' : ''}`} >
            <Heading title="Create a New Team"/>
            <FlexContainer>
                <FlexItem>
                    <GeneralContainer>

                        {!isTeamAdded && (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormRow label="Enter Team Name" id="name" error={errors.name?.message}
                                         button={
                                             <Button type="submit" size="small" variation="primary">
                                                 Submit
                                             </Button>}>

                                    <input type="text" id="name" name="name" placeholder="Team Name"
                                           className={`${errors.name ? '!border-rose-300' : ''} ${styles} !pl-4.5`}
                                           {...register("name", {required: "This field is required"})}/>
                                </FormRow>
                            </form>
                        )}

                        {isTeamAdded && (
                            <>
                                <Heading title="Select Team Members"/>
                                <ul>
                                    {users?.map((user) => (
                                        <UserListItem key={user.id} user={user} teamId={teamId}/>
                                    ))}
                                </ul>
                            </>
                        )}

                    </GeneralContainer>

                </FlexItem>
                <FlexItem>
                    <GeneralContainer>
                        <Heading title={teamData ? teamData.name : "Team Members"}/>
                        {isTeamAdded && (
                            /*<>
                                <TeamMembersList data={teamData} register={register} errors={errors}/>
                                <Button type="submit" size="large" variation="primary">
                                    Submit
                                </Button>
                            </>*/
                            <LeaderForm team={teamData} hideForm={hideForm}/>
                        )}

                    </GeneralContainer>

                </FlexItem>
            </FlexContainer>
        </div>
    );
}

export default AddTeam;