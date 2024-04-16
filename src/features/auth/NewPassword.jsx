import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Icons from "../../ui/Icons.jsx";
import {Button} from "../../ui/buttons/Button.jsx";
import Row from "../../ui/containers/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import {styles} from "../../ui/forms/FormInputs.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useForm} from "react-hook-form";
import {useUpdateUser} from "./hooks/useUpdateUser.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

function NewPassword() {
    const {register, handleSubmit, getValues, formState} = useForm();
    const {errors} = formState;

    const navagate = useNavigate();

    const {updateUser, isPending} = useUpdateUser();

    function onSubmit({password}) {
        updateUser({password}, {
            onSuccess: () => {
                toast.success("Password updated successfully");
                navagate("/login", {replace: true})
            }
        });
    }

    return (
        <Row>
            <GeneralContainer>
                <div className="w-full border-stroke dark:border-strokedark">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <Heading title="Create New Password"/>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <FormRow label="New Password" id="password" error={errors.password?.message}
                                     icon={ <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                                <input type="password" name="password" id="password" placeholder="**********"
                                       className={`${errors.password ? 'border-rose-300' : ''} ${styles}`}
                                       {...register("password", {required: "This field is required",
                                           minLength: {
                                           value: 8,
                                               message: "Password must be at least 8 characters long"
                                       },
                                       })}
                                />
                            </FormRow>

                            <FormRow label="Confirm Password" id="confirmPassword" error={errors.confirmPassword?.message}
                                     icon={ <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="**********"
                                       className={`${errors.confirmPassword ? 'border-rose-300' : ''} ${styles}`}
                                       {...register("confirmPassword", {required: "This field is required",
                                           validate: (value) => value === getValues().password || "Passwords do not match"
                                       })}
                                />
                            </FormRow>

                            <Button type="submit" variation="primary" size="small">
                                {!isPending? 'Submit' : <SpinnerMin label='loading...'/>}
                            </Button>


                        </form>
                    </div>
                </div>
            </GeneralContainer>
        </Row>
    );
}

export default NewPassword;