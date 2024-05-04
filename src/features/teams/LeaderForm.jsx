import {errorStyles, selectStyles, SelectWithIcon} from "../../ui/forms/FormInputs.jsx";
import Icons from "../../ui/Icons.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useForm} from "react-hook-form";
import ListItem2 from "../../ui/lists/ListItem2.jsx";
import {useGetTeamMembers} from "./hooks/useGetTeamMembers.js";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import {useUpdateTeam} from "./hooks/useUpdateTeam.js";
import {useNavigate} from "react-router-dom";
import {Button} from "../../ui/buttons/Button.jsx";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

/**
 * Renders a form component for selecting a team leader.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.team - The team object.
 * @param {Function} props.hideForm - The function to hide the form.
 * @param {Function} props.onClick - The function to handle form submission.
 * @return {JSX.Element} The rendered form component.
 *
 * @author James M Kambanga
 * Date: April 24, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function LeaderForm({team, hideForm, onClick}) {
    const { isFetchingMembers, teamMembers } = useGetTeamMembers(team?.id);
    const {updateTeam, isUpdating } = useUpdateTeam();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();

    function onSubmit(data) {

        updateTeam({
            id: team?.id,
            teamData: data
        }, {
            onSuccess: () => {
                hideForm(true);
                navigate(`/teams`);
            }
        })
    }

    if (isFetchingMembers) return <Spinner/>
    if (!teamMembers) return <Empty resourceName="Team Members"/>

    return (
        <div>
            <ul className="space-y-3">
                {teamMembers.map((member) => (
                    <ListItem2 key={member.id} image={member.avatar}
                               content={`${member.firstname} ${member.lastname}`}
                    />
                ))
                }
            </ul>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Choose a Leader" id="leader" error={errors.leader?.message}>
                    <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                        <select id="leader" name="leader"
                                aria-placeholder="Select a leader"
                                className={`${errors.leader ? errorStyles : ''} ${selectStyles} !pl-4.5`}
                                {...register("leader", {required: "This field is required"})}>

                            <option value="" className="text-body dark:text-bodydark">Select Leader
                            </option>
                            {teamMembers?.map((member) => (
                                <option key={member.id} value={member.id} className="text-body dark:text-bodydark">
                                    {`${member.firstname} ${member.lastname}`}
                                </option>
                            ))}
                        </select>
                    </SelectWithIcon>
                </FormRow>
                <Button onClick={onClick} disabled={isUpdating} type="submit" size="large" variation="primary">
                    {isUpdating ? <SpinnerMin label="Updating.."/> : "Update Team"}
                </Button>
            </form>
        </div>

    );
}

export default LeaderForm;