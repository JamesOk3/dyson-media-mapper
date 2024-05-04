import {useForm} from "react-hook-form";
import {useState} from "react";

import "react-phone-number-input/style.css";
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import {isValidPhoneNumber} from "react-phone-number-input";

import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import Icons from "../../ui/Icons.jsx";
import {styles, SelectWithIcon, selectStyles} from "../../ui/forms/FormInputs.jsx";
import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import DatePicker from "../../ui/forms/DatePicker.jsx";
import {useCreateUser} from "../auth/hooks/useCreateUser.js";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";
import {useNavigate} from "react-router-dom";
import {useRoles} from "./hooks/useRoles.js";


const genders = ['Male', 'Female', 'Other'];
const countries = ['UK', 'USA', 'China', 'Australia', 'Tanzania'];


/**
 * Renders a form for registering a new user
 *
 * @return {JSX.Element} The form JSX for adding a new user.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function UserForm({ user = {}, setUserToEdit }) {
    const { email, userValues } = user;
    const isEditSession = Boolean(email);

    const {createUser, isPending} = useCreateUser();
    const [phoneInput, setPhoneInput] = useState("");
    const navigate = useNavigate();

    const {register, handleSubmit, formState, control, reset} = useForm({
        defaultValues: isEditSession ? {
            ...user
        } : {},
    });
    const {errors} = formState;

    const { roles } = useRoles();

    function onSubmit({firstName, lastName, email, password, phoneNumber, dob, gender, address, city, postcode, country, role}) {
        if (!isEditSession) {
            createUser({firstName, lastName, email, password, phoneNumber, dob, gender, address, city, postcode, country, role},
                {
                    onSuccess: () => {
                        reset();
                        navigate("/users", {replace: true});
                    },
                });
        } else {
            console.log(user);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <GeneralContainer>
                <Heading title="Create User"/>
                <FlexContainer>
                    <FlexItem>
                        <FormRow label="First Name" id="firstName" error={errors.firstName?.message}
                                 icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                            <input type="text" name="firstName" id="firstName" placeholder="e.g., James"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.firstName ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("firstName", {required: "This field is required"})}
                            />
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Last Name" id="lastName" error={errors.lastName?.message}
                                 icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                            <input type="text" name="lastName" id="lastName" placeholder="e.g., Smith"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.lastName ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("lastName", {required: "This field is required"})}
                            />
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FlexContainer>
                    <FlexItem>
                        <FormRow label="Email Address" id="email" error={errors.email?.message}
                                 icon={<Icons id="envelope" width="20" height="20" viewBox="0 0 20 20"/>}>
                            <input type="email" name="email" id="email" placeholder="e.g., 9SsZC@example.com"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.email ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("email", {
                                       required: "This field is required",
                                       pattern: {
                                           value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                           message: "Enter a valid email address"
                                       }
                                   })}
                            />
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Phone number" id="phoneNumber" error={errors.phoneNumber?.message}>
                            <PhoneInputWithCountry control={control} id="phoneNumber"
                                                   value={phoneInput} onChange={setPhoneInput}
                                                   name="phoneNumber" disabled={isPending || isEditSession}
                                                   className={`${errors.phoneNumber ? 'border-rose-300' : ''} !px-4 ${styles}`}
                                                   rules={{
                                                       required: "This field is required",
                                                       validate: (value) => isValidPhoneNumber(value) || "Enter a valid phone number"
                                                   }}
                            />
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FlexContainer>
                    <FlexItem>
                        <FormRow label="Gender" id="gender" error={errors.gender?.message}>
                            <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                                <select id="gender" name="gender" disabled={isPending || isEditSession}
                                        aria-placeholder="Select Gender"
                                        className={`${errors.gender ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                        {...register("gender", {required: "This field is required"})}>

                                    <option value="" className="text-body dark:text-bodydark">Select Gender</option>
                                    {genders?.map((option, index) => (
                                        <option key={index} value={option}
                                                className="text-body dark:text-bodydark">{option}</option>
                                    ))}
                                </select>
                            </SelectWithIcon>
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Date of Birth" id="dob" error={errors.dob?.message}>
                            <DatePicker disabled={isPending || isEditSession} id="dob" name="dob" register={register} control={control}
                                        error/>
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FlexContainer>
                    <FlexItem>
                        <FormRow label="Address" id="address" error={errors.address?.message}>
                            <input type="text" name="address" id="address" placeholder="e.g., 123 Main Street"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.address ? 'border-rose-300' : ''} ${styles} px-4`}
                                   {...register("address", {required: "This field is required"})}
                            />
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Postcode" id="postcode" error={errors.postcode?.message}>
                            <input type="text" name="Postcode" id="postcode" placeholder="e.g., N1 1AA"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.postcode ? 'border-rose-300' : ''} ${styles} px-4`}
                                   {...register("postcode", {required: "This field is required"})}
                            />
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FlexContainer>
                    <FlexItem>
                        <FormRow label="City" id="city" error={errors.city?.message}>
                            <input type="text" name="city" id="city" placeholder="City"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.city ? 'border-rose-300' : ''} ${styles} px-4`}
                                   {...register("city", {required: "This field is required"})}/>
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Country" id="country" error={errors.country?.message}>
                            <SelectWithIcon
                                icon1={<Icons id="globe" width="20" height="20" viewBox="0 0 20 20"/>}
                                icon2={<Icons id="chevron-down"/>}>

                                <select id="country" name="country" disabled={isPending || isEditSession}
                                        aria-placeholder="Select Country"
                                        className={`${errors.country ? 'border-rose-300' : ''} ${selectStyles}`}
                                        {...register("country", {required: "This field is required"})}>

                                    <option value="" className="text-body dark:text-bodydark">Select Country</option>
                                    {countries?.map((option) => (
                                        <option key={option.id} value={option}
                                                className="text-body dark:text-bodydark">{option}</option>
                                    ))}
                                </select>
                            </SelectWithIcon>
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <FlexContainer>
                    <FlexItem>
                        <FormRow label="Assign role" id="role" error={errors.role?.message}>
                            <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                                <select id="role" name="role" disabled={isPending }
                                        aria-placeholder="Assign Role"
                                        className={`${errors.gender ? 'border-rose-300' : ''} ${selectStyles} px-4`}
                                        {...register("role")}>

                                    {roles?.filter(role => role.roleName === "user" || role.roleName === "member").map((role) => (
                                        <option key={role.id} value={role.roleName}
                                                className="text-body dark:text-bodydark">{role.roleName}</option>
                                    ))}
                                </select>
                            </SelectWithIcon>
                        </FormRow>
                    </FlexItem>
                    <FlexItem>
                        <FormRow label="Password" id="password" error={errors.password?.message}
                                 icon={<Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>}>
                            <input type="password" name="password" id="password" placeholder="**********"
                                   disabled={isPending || isEditSession}
                                   className={`${errors.password ? 'border-rose-300' : ''} ${styles}`}
                                   {...register("password", {
                                       required: "This field is required",
                                       minLength: {
                                           value: 8,
                                           message: "Password must be at least 8 characters long"
                                       },
                                   })}
                            />
                        </FormRow>
                    </FlexItem>
                </FlexContainer>

                <ButtonGroup>
                    <Button type="reset" variation="secondary" size="small" disabled={isPending}
                            onClick={() => navigate("/users", {replace: true})}>
                        Cancel
                    </Button>
                    <Button type="submit" variation="primary" size="small" disabled={isPending || isEditSession}>
                        {isPending ? <SpinnerMin label="loading..."/> : 'Save'}
                    </Button>
                </ButtonGroup>

            </GeneralContainer>

        </form>

    );
}

export default UserForm;