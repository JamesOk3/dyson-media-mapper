import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {Link, useNavigate} from "react-router-dom";
import Icons from "../../ui/Icons.jsx";
import {Button} from "../../ui/buttons/Button.jsx";
import Row from "../../ui/containers/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import {styles} from "../../ui/forms/FormInputs.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useResetPassword} from "./hooks/useResetPassword.js";
import {useState} from "react";
import toast from "react-hot-toast";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

/**
 * Handles the submission of the reset password form for logged-in users.
 * uses useResetPassword hook to send a request to the backend for password reset.
 *
 * @return {JSX.Element} with a form for users to enter new password.
 *
 * @author James M Kambanga,
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ResetPassword() {
    const [email, setEmail] = useState("");

    const navagate = useNavigate();
    const {resetPassword, isPending} = useResetPassword();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email) return;
        resetPassword({email}, {
            onSuccess: () => {
                navagate("/login", {replace: true})
            },
            onError: (error) => {
                toast.error(error.message);}
        });
    }
    return (
        <Row>
            <GeneralContainer>

                <div className="w-full border-stroke dark:border-strokedark">
                    <div className="w-full p-4">
                        <Heading title="Reset Your Password"/>

                        <form onSubmit={handleSubmit}>

                            <FormRow label="Please Enter Your Email Address" id="email" required
                                     icon={<Icons id="envelope" width="20" height="20" viewBox="0 0 20 20"/>}>
                                <input type="email" name="email" id="email" placeholder="e.g., 9SsZC@example.com"
                                       className={styles} disabled={isPending}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </FormRow>


                            <div className="mb-5 flex flex-col gap-4 xsm:flex-row-reverse justify-between text-gray hover:bg-opacity-90">
                                <Button className="" type="submit" variation="primary" size="small" disabled={isPending}>
                                    {!isPending ? 'Send Password reset link' : <SpinnerMin label="Loading.."/> }
                                </Button>
                                <Link to="/login" className="flex items-center gap-2 xsm:order-1">
                                    <span className="flex items-center justify-center  w-8 h-8  rounded-full bg-primary text-white">
                                        <Icons id="left-arrow"/>
                                    </span>
                                    <span className="text-primary hover:underline">Back to Login</span>
                                </Link>


                            </div>

                        </form>
                    </div>
                </div>
            </GeneralContainer>
        </Row>
    );
}

export default ResetPassword;