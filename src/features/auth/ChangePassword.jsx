import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Icons from "../../ui/Icons.jsx";
import {Button} from "../../ui/buttons/Button.jsx";
import Row from "../../ui/containers/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import {styles} from "../../ui/forms/FormInputs.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useForm} from "react-hook-form";
import {useUpdateUser} from "./hooks/useUpdateUser.js";
import toast from "react-hot-toast";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

function ChangePassword() {
    const {register, handleSubmit, getValues, formState, reset} = useForm();
    const {errors} = formState;


    const {updateUser, isUpdating } = useUpdateUser();

    function onSubmit({password}) {
        updateUser({password}, {
            onSuccess: () => {
                reset();
                toast.success("Password updated successfully");
            }
        });
    }

    return (
        <GeneralContainer>
            <div className="w-full border-stroke dark:border-strokedark">
                <div className="w-full px-4 sm:px-12.5 xl:px-17.5">
                    <Heading title="Change Password"/>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FormRow label="Current Password" id="curPassword" error={errors.curPassword?.message}
                                 icon={ <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                            <input type="password" name="curPassword" id="curPassword" placeholder="**********"
                                   disabled={isUpdating}
                                   className={`${errors.curPassword ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("curPassword", {required: "This field is required"})}
                            />
                        </FormRow>

                        <FormRow label="New Password" id="password" error={errors.password?.message}
                                 icon={ <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                            <input type="password" name="password" id="password" placeholder="**********"
                                   disabled={isUpdating}
                                   className={`${errors.password ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("password", {required: "This field is required",
                                       minLength: {
                                       value: 8,
                                           message: "Password must be at least 8 characters long"
                                   },
                                   })}/>
                        </FormRow>

                        <FormRow label="Confirm New Password" id="confirmPassword" error={errors.confirmPassword?.message}
                                 icon={ <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="**********"
                                   disabled={isUpdating}
                                   className={`${errors.confirmPassword ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("confirmPassword", {required: "This field is required",
                                       validate: (value) => value === getValues().password || "Passwords do not match"
                                   })}/>
                        </FormRow>

                        <Button type="submit" variation="primary" size="small" disabled={isUpdating}>
                            {isUpdating ?  <SpinnerMin label='Updating...'/> : "Update Password"}
                        </Button>

                    </form>
                </div>
            </div>
        </GeneralContainer>
    );
}

export default ChangePassword;