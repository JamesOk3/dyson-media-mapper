import Heading from "../../ui/Heading.jsx";

import GridContainer from "../../ui/containers/GridContainer.jsx";
import GridItem from "../../ui/containers/GridItem.jsx";
import FormContainer from "../../ui/forms/FormContainer.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {Input, PhotoFileInput, Select, TextArea} from "../../ui/forms/FormInputs.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import Buttons, {ButtonGroup} from "../../ui/Buttons.jsx";
import Icons from "../../ui/Icons.jsx";



/**
 * Renders a form for adding a new product
 *
 * @return {JSX.Element} The form JSX for adding a new product.
 *
 * @author James M Kambanga
 * Date: March 31, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

const categories = [
    "Vacuum Cleaners", "Hair Care", "Electronics", "Lighting", "Other"
]
function ProductForm() {
    return (
        <GridContainer col="5" gap="8">
            <GridItem className="col-span-5 xl:col-span-3" >
                <FormContainer>
                    <Heading title="Add Product" />
                    <form>
                        <FormRow label="Product Name">
                            <Input type="text" placeholder="Enter product name"/>
                        </FormRow>
                        <FormRow label="Product Category">
                            <Select options={categories} placeholder="Select product category"
                                     icon2={<Icons id="chevron-down" className="fill-current"/>}/>
                        </FormRow>
                        <FormRow label="Product Description" for="description">
                            <TextArea rows={6} name="description"
                                      placeholder="Type product description"/>
                        </FormRow>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Product Quantity">
                                    <Input type="number" placeholder="Quantity"/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Product Price">
                                    <Input type="number" placeholder="£"/>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>
                        <ButtonGroup>
                            <Buttons size="small" type="reset" variation="secondary">Cancel</Buttons>
                            <Buttons size="small" type="submit" variation="primary">Save</Buttons>
                        </ButtonGroup>
                    </form>
                </FormContainer>
            </GridItem>

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

export default ProductForm;