import {useDeleteProduct} from "./hooks/useDeleteProduct.js";
import {useState} from "react";
import Table from "../../ui/tables/Table.jsx";
import ProductForm from "./ProductForm.jsx";
import ActionMenu from "../../ui/modals/ActionMenu.jsx";

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