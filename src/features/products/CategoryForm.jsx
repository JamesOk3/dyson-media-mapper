import {useForm} from "react-hook-form";

import {Button} from "../../ui/buttons/Button.jsx";
import {styles} from "../../ui/forms/FormInputs.jsx";
import FormRow from "../../ui/forms/FormRow.jsx";
import {useEditCategory} from "./hooks/useEditCategory.js";
import {useAddCategory} from "./hooks/useAddCategory.js";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

/**
 * Handles the form submission for category creation or editing.
 *
 * @param {Object} category - data to be edited.
 * @param {function} setEditCategory - function to set the category to be edited.
 * @return {component} a form for adding or editing categories.
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function CategoryForm({ category = {}, setEditCategory}) {
    const { id: categoryId, ...categoryValues } = category
    const isEditSession = Boolean(categoryId);

    const {register, handleSubmit, formState, reset} = useForm({
        defaultValues: isEditSession ? categoryValues : {},
    });
    const {errors} = formState;

    const {isAdding, addCategory} = useAddCategory();
    const {isEditing, editCategory} = useEditCategory();
    const isWorking = isAdding || isEditing;

    function onSubmit(data) {

        if (isEditSession) {
            editCategory({
                newCategoryData: data,
                id: categoryId
            },{
                onSuccess: () => {
                    setEditCategory("");
                }
            });
        } else {
            addCategory(data, {
                onSuccess: () => {
                    reset();
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label={isEditSession ? "" : "Add New Category"} id="categoryName" error={errors.categoryName?.message}
                     button={
                        <Button type="submit" size="small" variation="primary">
                            {isWorking ? <SpinnerMin/> : (isEditSession ? "Update" : "Add")}
                        </Button>}>

                <input type="text" id="categoryName" name="categoryName" placeholder="Category Name"
                       disabled={isWorking}
                       className={`${errors.categoryName ? '!border-rose-300' : ''} ${styles} !pl-4.5`}
                       {...register("categoryName", {required: "This field is required"})}
                />
            </FormRow>
        </form>
    );
}

export default CategoryForm;