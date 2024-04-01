import GridContainer from "../../ui/containers/GridContainer.jsx";
import GridItem from "../../ui/containers/GridItem.jsx";
import FormContainer from "../../ui/forms/FormContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import Icons from "../../ui/Icons.jsx";
import {Input, PhotoFileInput, Select} from "../../ui/forms/FormInputs.jsx";
import {Buttons, ButtonGroup} from "../../ui/Buttons.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import DatePicker from "../../ui/forms/DatePicker.jsx";

const genders = ['Male', 'Female', 'Other'];
const countries = ['UK', 'USA', 'China', 'Australia', 'Tanzania'];

/**
 * Renders a form for registering a new user
 *
 * @return {JSX.Element} The form JSX for adding a new product.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function UserForm() {
    return (
        <GridContainer col="5" gap="2">
            <GridItem className="col-span-5 xl:col-span-3" >
                <FormContainer>
                    <Heading title="Create User" />
                    <form>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="First Name"
                                         icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                                    <Input type="text" name="firstName" placeholder="e.g., James"/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Last Name"
                                         icon={<Icons id="user" width="20" height="20" viewBox="0 0 20 20"/>}>
                                    <Input type="text" name="lastName" placeholder="e.g., Smith"/>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>

                        <FormRow label="Email Address"
                                 icon={<Icons id="envelope" width="20" height="20" viewBox="0 0 20 20"/>}>
                            <Input type="email" name="email" placeholder="e.g., 9SsZC@example.com"/>
                        </FormRow>

                        <FormRow label="Phone number"
                                 icon={<Icons id="phone" viewBox="0 0 64 64"/>}>
                            <Input type="text" name="phoneNumber" placeholder="e.g., +448012345678"/>
                        </FormRow>

                        <FormRow label="Date of Birth">
                            <DatePicker/>
                        </FormRow>

                        <FormRow label="Gender" >
                            <Select placeholder="Select Gender" options={genders}
                                    icon2={<Icons id="chevron-down"/>}/>
                        </FormRow>

                        <FormRow label="Address">
                            <Input type="text" name="address" placeholder="e.g., 123 Main Street"/>
                        </FormRow>

                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Postcode">
                                    <Input type="text" name="Postcode" placeholder="e.g., N1 1AA"/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Country" >
                                    <Select placeholder="Select Country" options={countries}
                                            icon1={<Icons id="globe" width="20" height="20" viewBox="0 0 20 20"/>}
                                            icon2={<Icons id="chevron-down"/>}/>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>

                        <ButtonGroup>
                            <Buttons type="reset" variation="secondary" size="small">Cancel</Buttons>
                            <Buttons type="submit" variation="primary" size="small">Save</Buttons>
                        </ButtonGroup>
                    </form>
                </FormContainer>
            </GridItem>
            {/* Profile Photo Upload Form*/}
            <GridItem className="col-span-5 xl:col-span-2">
                <FormContainer>
                    <Heading title="Profile Photo" />
                    <form>
                        <FormRow label="Upload Photo">
                            <PhotoFileInput>
                                <Buttons type="reset" variation="secondary" size="small">Cancel</Buttons>
                                <Buttons type="submit" variation="primary" size="small">Save</Buttons>
                            </PhotoFileInput>
                        </FormRow>
                    </form>
                </FormContainer>
            </GridItem>
        </GridContainer>
    );
}

export default UserForm;