import FlexContainer from "../../ui/containers/FlexContainer.jsx";
import FlexItem from "../../ui/containers/FlexItem.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import Heading from "../../ui/Heading.jsx";
import CategoryForm from "./CategoryForm.jsx";
import {useGetCategories} from "./hooks/useGetCategories.js";
import ListItem from "../../ui/lists/ListItem.jsx";
import Empty from "../../ui/Empty.jsx";
import {useDeleteCategory} from "./hooks/useDeleteCategory.js";
import {useState} from "react";
import Spinner from "../../ui/spinners/Spinner.jsx";

/**
 * Component for displaying and managing product categories.
 * creates a list of category items with a delete and edit button
 *
 * @return {JSX.Element} The JSX for the Categories component.
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Categories() {
    const {isFetchingCategories, categories } = useGetCategories();

    const {isDeleting, deleteCategory} = useDeleteCategory();
    const [editCategory, setEditCategory] = useState("");

    if (isFetchingCategories) return <Spinner/>
    if(!categories) return <Empty resourceName="No Categories could be loaded"/>




    return (
        <FlexContainer>
            <FlexItem>
                <GeneralContainer>
                    <Heading title="Product Categories"/>
                    <ul>
                        {categories?.map((category) => (
                            <ListItem key={category.id} name="Category"
                                      data={category.categoryName}
                                      id={category.id}
                                      onDelete={deleteCategory}
                                      onEdit={() => setEditCategory(category)}
                            >
                                {editCategory?.id === category.id && (
                                    <CategoryForm category={editCategory} setEditCategory={setEditCategory}/>
                                )}
                            </ListItem>
                        ))}
                    </ul>
                </GeneralContainer>

            </FlexItem>
            <FlexItem>
                <GeneralContainer>
                    <CategoryForm/>
                </GeneralContainer>

            </FlexItem>
        </FlexContainer>
    );
}

export default Categories;