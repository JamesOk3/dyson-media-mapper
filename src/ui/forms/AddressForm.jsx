import FormRow from "./FormRow.jsx";
import {selectStyles, SelectWithIcon, styles} from "./FormInputs.jsx";
import FlexContainer from "../containers/FlexContainer.jsx";
import FlexItem from "../containers/FlexItem.jsx";
import Icons from "../Icons.jsx";
import Heading from "../Heading.jsx";

const countries = ['UK', 'USA', 'China', 'Australia', 'Tanzania'];

/**
 * Generates an address form with fields for address, postcode, city, and country.
 *
 * @param {object} register - The registration function to register form data with React Hook Form
 * @param {object} errors - Object containing error messages for form fields
 * @param {string} title - Optional title for the address form
 * @return {JSX.Element} The JSX element representing the address form
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function AddressForm({register, errors, title}) {
    return (
        <div>
            {title && <Heading title={title}/>}

            <FormRow label="Address" id="address" error={errors.address?.message}>
                <input type="text" name="address" id="address" placeholder="e.g., 123 Main Street"
                    // disabled={isPending}
                       className={`${errors.address ? 'border-rose-300' : ''} ${styles} !pl-4.5`}
                       {...register("address", {required: "This field is required"})}
                />
            </FormRow>
            <FlexContainer>
                <FlexItem>
                    <FormRow label="Postcode" id="postcode" error={errors.postcode?.message}>
                        <input type="text" name="Postcode" id="postcode" placeholder="e.g., N1 1AA"
                            // disabled={isPending}
                               className={`${errors.postcode ? 'border-rose-300' : ''} ${styles} !pl-4.5`}
                               {...register("postcode", {required: "This field is required"})}
                        />
                    </FormRow>
                </FlexItem>
                <FlexItem>
                    <FormRow label="City" id="city" error={errors.city?.message}>
                        <input type="text" name="city" id="city" placeholder="City"
                            // disabled={isPending}
                               className={`${errors.city ? 'border-rose-300' : ''} ${styles} !pl-4.5`}
                               {...register("city", {required: "This field is required"})}
                        />
                    </FormRow>
                </FlexItem>
            </FlexContainer>
            <FormRow label="Country" id="country" error={errors.country?.message}>
                <SelectWithIcon
                    icon1={<Icons id="globe" width="20" height="20" viewBox="0 0 20 20"/>}
                    icon2={<Icons id="chevron-down"/>}>

                    <select id="country" name="country"
                            aria-placeholder="Select Country"
                            className={`${errors.country ? 'border-rose-300' : ''} ${selectStyles}`}
                            {...register("country", {required: "This field is required"})}>

                        <option value="" className="text-body dark:text-bodydark">Select Country</option>
                        {countries?.map((option, index) => (
                            <option key={index} value={option}
                                    className="text-body dark:text-bodydark">{option}</option>
                        ))}
                    </select>
                </SelectWithIcon>
            </FormRow>
        </div>
    );
}

export default AddressForm;