import {useDeleteProduct} from "./hooks/useDeleteProduct.js";
import Table from "../../ui/tables/Table.jsx";
import ProductForm from "./ProductForm.jsx";
import ActionMenu from "../../ui/modals/ActionMenu.jsx";

/**
 * Function component for rendering a row in the product table.
 *
 * @param {object} product - The product object to display in the row.
 * @param {object} editProduct - The product object to be edited.
 * @param {function} setEditProduct - The function to set the product to edit.
 * @return {JSX.Element} The JSX element representing the product row.
 *
 * @author James M Kambanga
 * Date: April 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ProductRow({product, editProduct, setEditProduct}) {
    const { isDeleting, deleteProduct} = useDeleteProduct();

    function handleProductEdit() {
        // setShowEditForm(!showEditForm);
        setEditProduct(product);
    }

    const { id, name, photo, price, quantity, status } = product;

    return (
        <>
            <Table.Row>
                <Table.Tdata tdataStyles=""
                     graphic={
                    <div className="max-w-15 flex-shrink-0 sm:max-w-20">
                        <img src={photo} alt="profile-photo"/>
                    </div>}>
                    {name}
                </Table.Tdata>

                <Table.Tdata tdataStyles="hidden sm:block text-center">{price}</Table.Tdata>
                <Table.Tdata tdataStyles="hidden sm:block text-center">{quantity}</Table.Tdata>
                <Table.Tdata tdataStyles="hidden xl:block text-center">{status}</Table.Tdata>

                <Table.Tdata tdataStyles="justify-center">
                    <ActionMenu
                        id={id}
                        onEdit={handleProductEdit}
                        onDelete={deleteProduct}
                        isDeleting={isDeleting}
                    />
                </Table.Tdata>

            </Table.Row>

            {editProduct && id === editProduct.id && <ProductForm product={product} setEditProduct={setEditProduct} />}
        </>
    );
}

export default ProductRow;