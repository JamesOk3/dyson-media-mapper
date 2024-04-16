
import Spinner from "../../ui/spinners/Spinner.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {AddButton, ButtonGroup} from "../../ui/buttons/Button.jsx";
import MinSearchBar from "../../ui/forms/MinSearchBar.jsx";
import Heading from "../../ui/Heading.jsx";
import {useNavigate} from "react-router-dom";
import {useGetProducts} from "./hooks/useGetProducts.js";
import Empty from "../../ui/Empty.jsx";
import Table from "../../ui/tables/Table.jsx";
import ProductRow from "./ProductRow.jsx";
import {useState} from "react";


function Stock() {
    const [editProduct, setEditProduct] = useState("");
    const navigate = useNavigate();

    const {isFetchingProducts, products, error} = useGetProducts();

    if (isFetchingProducts) return <Spinner size="13"/>

    if (!products.length) return <Empty resourceName="products" />

    return (
        <GeneralContainer>
            <ButtonGroup>
                <MinSearchBar />
                <AddButton label="Add Product" onClick={() => navigate("/products/add-product")} />
            </ButtonGroup>
            <Heading title="Products Stock" />

            <Table cols="75%_25%" smCols="40%_20%_25%_15%" xlCols="40%_15%_15%_20%_10%" >
                <Table.Header>
                    <Table.Thead theadStyles="">Product </Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Price</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Quantity</Table.Thead>
                    <Table.Thead theadStyles="hidden xl:block text-center">Status</Table.Thead>
                    <Table.Thead theadStyles="text-center">Action</Table.Thead>
                </Table.Header>

                <Table.Body
                    data={products}
                    render={(product) => (
                        <ProductRow
                            product={product}
                            key={product.id}
                            editProduct={editProduct}
                            setEditProduct={setEditProduct}
                        />
                    )}
                />
            </Table>

        </GeneralContainer>
    );
}

export default Stock;