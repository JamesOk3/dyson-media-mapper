import {PhotoFileInput, selectStyles, SelectWithIcon, styles, errorStyles} from "../../ui/forms/FormInputs.jsx";
import {Button, ButtonGroup} from "../../ui/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import {useAddProduct} from "./hooks/useAddProduct.js";
import {useEditProduct} from "./hooks/useEditProduct.js";
import {useGetCategories} from "./hooks/useGetCategories.js";
import Heading from "../../ui/Heading.jsx";
import GridContainer from "../../ui/containers/GridContainer.jsx";
import GridItem from "../../ui/containers/GridItem.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import Icons from "../../ui/Icons.jsx";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";
import useFilePreview from "../../hooks/useFilePreview.js";
import {useNavigate} from "react-router-dom";


/**
 * Function for handling form submission of product data.
 *
 *  @param {Object} data - The data for the product to be edited.
 *  @param {function} setEditProduct - The function to set the product to be edited.
 *  @return {component} contains a form for adding or editing products.
 *
 * @author James M Kambanga
 * Date: March 31, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ProductForm({ product = {}, setEditProduct}) {
    const { id: productId, ...productValues } = product;
    const isEditSession = Boolean(productId)
    const navigate = useNavigate();

    const {register, handleSubmit, formState, getValues, reset, watch} = useForm({
        defaultValues: isEditSession ? productValues : {},
    });
    const {errors} = formState;

    function fileInputReset() {
        reset({photo: null});
        setImgSrc(null);
    }

    const photo = watch("photo");
    const [imgSrc, setImgSrc]  = useFilePreview(photo);

    const {isFetchingCategories, categories } = useGetCategories();
    const {isAdding, addProduct} = useAddProduct();
    const {isEditing, editProduct} = useEditProduct();
    const isWorking = isAdding || isEditing;

    function onSubmit(data) {
        const photo = typeof data.photo === "string" ? data.photo : data.photo[0];

        if (isEditSession) {
            editProduct({
                newProductData: {
                    ...data,
                    photo: photo,
                    status: getValues().quantity > 0 ? "Available" : "Unavailable"
                },
                id: productId,
            }, {
                onSuccess: () => {
                    setEditProduct("");
                }
            });
        } else {
            addProduct({
                ...data,
                photo: photo,
                status: getValues().quantity > 0 ? "Available" : "Unavailable"
            }, {
                onSuccess: () => {
                    reset();
                    fileInputReset();
                    navigate("/products/stock");
                }
            });
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <GridContainer col="5" gap="8">
                <GridItem className="col-span-5 xl:col-span-3">
                    <GeneralContainer>
                        <Heading title={isEditSession ? "Edit Product" : "Add Product"}/>
                        <FormRow label="Product Name" id="name" error={errors.name?.message}>
                            <input type="text" name="name" id="name" placeholder="Enter prodcut name"
                                   disabled={isWorking}
                                   className={`${errors.name ? errorStyles : ''} ${styles} !pl-4.5`}
                                   {...register("name", {required: "This field is required"})}/>
                        </FormRow>
                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Product Number" id="productNumber"
                                         error={errors.productNumber?.message}>
                                    <input type="text" name="productNumber" id="productNumber"
                                           placeholder="Product number"
                                           disabled={isWorking}
                                           className={`${errors.productNumber ? errorStyles : ''} ${styles} !pl-4.5`}
                                           {...register("productNumber", {required: "This field is required"})}/>
                                </FormRow>

                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Product Category" id="category" error={errors.category?.message}>
                                    <SelectWithIcon icon2={<Icons id="chevron-down"/>}>
                                        <select id="category" name="category" disabled={isWorking}
                                                aria-placeholder="Select Category"
                                                className={`${errors.category ? errorStyles : ''} ${selectStyles} !pl-4.5`}
                                                {...register("category", {required: "This field is required"})}>

                                            <option value=""
                                                    className="text-body dark:text-bodydark">Select Category
                                            </option>
                                            {categories?.map((category) => (
                                                <option key={category.id} value={category.id}
                                                        className="text-body dark:text-bodydark">{category.categoryName}</option>
                                            ))}
                                        </select>
                                    </SelectWithIcon>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>

                        <FormRow label="Product Description" id="description" error={errors.description?.message}
                                 icon={<Icons id="pen" width="20" height="20" viewBox="0 0 20 20"/>}>
                             <textarea className={`${errors.description ? errorStyles : ''} ${styles}`}
                                       name="description" id="description" rows="6"
                                       placeholder="Type product description"
                                       {...register("description")}>
                            </textarea>
                        </FormRow>

                        <FlexContainer>
                            <FlexItem>
                                <FormRow label="Product Quantity" id="quantity" error={errors.quantity?.message}>
                                    <input type="number" name="quantity" id="quantity"
                                           placeholder="Product quantity"
                                           disabled={isWorking}
                                           className={`${errors.quantity ? errorStyles : ''} ${styles} !pl-4.5`}
                                           {...register("quantity", {
                                               required: "This field is required",
                                               validate: (value) => value >= 0 || "Quantity must be greater than 0",
                                           })}/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Product Price" id="price" error={errors.price?.message}>
                                    <input type="number" name="price" id="price" placeholder="£" disabled={isWorking}
                                           className={`${errors.price ? errorStyles : ''} ${styles} !pl-4.5`}
                                           {...register("price", {
                                               required: "This field is required",
                                               validate: (value) => value > 0 || "Price must be greater than 0",
                                           })}/>
                                </FormRow>
                            </FlexItem>
                        </FlexContainer>
                    </GeneralContainer>
                </GridItem>

                <GridItem className="col-span-5 xl:col-span-2">
                    <GeneralContainer>
                        <FormRow label="Product Photo" id="photo">
                            <PhotoFileInput image={imgSrc} >
                                <input id="photo" name="photo" type="file" accept="image/*"
                                       disabled={isWorking}
                                       className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                       {...register("photo")}/>
                            </PhotoFileInput>
                        </FormRow>
                        <ButtonGroup>
                            <Button disabled={isWorking} size="small" type="reset" onClick={() => {
                                fileInputReset();
                                setEditProduct("");
                            }}
                                    variation="secondary">Cancel</Button>
                            <Button disabled={isWorking} size="small" type="submit" variation="primary">
                                {isWorking ? <SpinnerMin label="Saving..."/> : (`${isEditSession ? 'Update' : 'Add'}`)}
                            </Button>
                        </ButtonGroup>
                    </GeneralContainer>
                </GridItem>
            </GridContainer>
        </form>
    );
}

export default ProductForm;