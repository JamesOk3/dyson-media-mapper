import GridContainer from "../../ui/containers/GridContainer.jsx";
import GridItem from "../../ui/containers/GridItem.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import Icons from "../../ui/Icons.jsx";
import {PhotoFileInput, selectStyles, SelectWithIcon, styles} from "../../ui/forms/FormInputs.jsx";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import {isValidPhoneNumber} from "react-phone-number-input";
import DatePicker from "../../ui/forms/DatePicker.jsx";
import {Button} from "../../ui/buttons/Button.jsx";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";
import {useForm} from "react-hook-form";
import {useUser} from "../auth/hooks/useUser.js";
import {useUpdateUser} from "../auth/hooks/useUpdateUser.js";
import useFilePreview from "../../hooks/useFilePreview.js";
import {useState} from "react";

const genders = ['Male', 'Female', 'Other'];
const countries = ['UK', 'USA', 'China', 'Australia', 'Tanzania'];

/**
 * A component for updating user details.
 * uses updateUser mutation function to send the submitted data to the backend.
 *
 * @return {JSX.Element} The form for updating user details.
 *
 * @author James M Kambanga,
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function UpdateUserForm() {

    const {
        user: {
            email,
            user_metadata
        }
    } = useUser()

    const {register, handleSubmit, formState: {errors}, watch, control} = useForm({
        defaultValues: {
            email,
            ...user_metadata
        }
    });

    const avatar = watch("avatar");
    const [imgSrc] = useFilePreview(avatar);

    const [phoneInput, setPhoneInput] = useState("");
    const {updateUser, isUpdating } = useUpdateUser();

    function onSubmit(data) {

        const avatar = typeof data.avatar === "string" ? data.avatar : data.avatar[0];
        updateUser({...data, avatar});
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-7.5">
            <GridContainer col="5" gap="2">
                <GridItem className="col-span-5 xl:col-span-3">
                    <GeneralContainer>
                        <FormRow label="Email Address" id="email" error={errors.email?.message}
                                 icon={<Icons id="envelope" width="20" height="20" viewBox="0 0 20 20"/>}>
                            <input type="email" name="email" id="email"
                                   disabled
                                   className={`${errors?.email ? 'border-rose-300' : ''} ${styles} opacity-90`}
                                   {...register("email", {
                                       required: "This field is required",
                                       pattern: {
                                           value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                           message: "Enter a valid email address"
                                       }
                                   })}
                            />
                        </FormRow>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="First Name" id="firstName" error={errors?.firstName?.message}
                                         icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                                    <input type="text" name="firstName" id="firstName" placeholder="e.g., James"
                                           disabled={isUpdating}
                                           className={`${errors?.firstName ? 'border-rose-300' : ''} ${styles}`}
                                           {...register("firstName", {required: "This field is required"})}
                                    />
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Last Name" id="lastName" error={errors?.lastName?.message}
                                         icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                                    <input type="text" name="lastName" id="lastName" placeholder="e.g., Smith"
                                           disabled={isUpdating}
                                           className={`${errors?.lastName ? 'border-rose-300' : ''} ${styles}`}
                                           {...register("lastName", {required: "This field is required"})}
                                    />
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Gender" id="gender" error={errors.gender?.message}>
                                    <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                                        <select id="gender" name="gender" disabled={isUpdating}
                                                aria-placeholder="Select Gender"
                                                className={`${errors.gender ? 'border-rose-300' : ''} ${selectStyles} !px-4`}
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
                                    <DatePicker disabled={isUpdating} id="dob" name="dob" register={register} control={control}
                                                error/>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>

                        <FormRow label="Phone number" id="phoneNumber" error={errors.phoneNumber?.message}>
                            <PhoneInputWithCountry control={control} id="phoneNumber"
                                                   value={phoneInput} onChange={setPhoneInput}
                                                   name="phoneNumber" disabled={isUpdating}
                                                   className={`${errors.phoneNumber ? 'border-rose-300' : ''} !px-4 ${styles}`}
                                                   rules={{
                                                       required: "This field is required",
                                                       validate: (value) => isValidPhoneNumber(value) || "Enter a valid phone number"
                                                   }}
                            />
                        </FormRow>

                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Address" id="address" error={errors.address?.message}>
                                    <input type="text" name="address" id="address" placeholder="e.g., 123 Main Street"
                                           disabled={isUpdating}
                                           className={`${errors.address ? 'border-rose-300' : ''} ${styles} !px-4`}
                                           {...register("address", {required: "This field is required"})}
                                    />
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Postcode" id="postcode" error={errors.postcode?.message}>
                                    <input type="text" name="Postcode" id="postcode" placeholder="e.g., N1 1AA"
                                           disabled={isUpdating}
                                           className={`${errors.postcode ? 'border-rose-300' : ''} ${styles} !px-4`}
                                           {...register("postcode", {required: "This field is required"})}
                                    />
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>

                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="City" id="city" error={errors.city?.message}>
                                    <input type="text" name="city" id="city" placeholder="City"
                                           disabled={isUpdating}
                                           className={`${errors.city ? 'border-rose-300' : ''} ${styles} !px-4`}
                                           {...register("city", {required: "This field is required"})}/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Country" id="country" error={errors.country?.message}>
                                    <SelectWithIcon
                                        icon1={<Icons id="globe" width="20" height="20" viewBox="0 0 20 20"/>}
                                        icon2={<Icons id="chevron-down"/>}>

                                        <select id="country" name="country" disabled={isUpdating}
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

                    </GeneralContainer>
                </GridItem>
                {/* Profile Photo Upload Form*/}
                <GridItem className="col-span-5 xl:col-span-2">
                    <GeneralContainer>
                        <Heading title="Profile Photo"/>
                        <FormRow label="Profile Photo" id="avatar">
                            <PhotoFileInput image={imgSrc} >
                                <input id="avatar" name="avatar" type="file" accept="image/*"
                                       disabled={isUpdating}
                                       className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                       {...register("avatar")}/>
                            </PhotoFileInput>
                        </FormRow>

                        <Button type="submit" variation="primary" size="large">
                            {isUpdating ? <SpinnerMin label="Updating..."/> : 'Update Details'}
                        </Button>

                    </GeneralContainer>
                </GridItem>
            </GridContainer>
        </form>

    );
}

export default UpdateUserForm;