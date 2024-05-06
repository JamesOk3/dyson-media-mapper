import Table from "../../../ui/tables/Table.jsx";
import { ViewButton} from "../../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

/**
 * Renders a row in the admin booking table.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.booking - The booking object.
 * @return {JSX.Element} The rendered row.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function AdminBookingRow({booking}) {
    const navigate = useNavigate();
    const {  quantity, product, event, team } = booking;

    function handleProductView() {
        navigate(`/products/product-details/${product.id}`);
    }

    return (

        <Table.Row>
            <Table.Tdata tdataStyles="">
                <div className="flex justify-between items-center">
                    <span>{product?.name}</span>
                    <span><ViewButton onClick={handleProductView}/></span>
                </div>
            </Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center">{team?.name}</Table.Tdata>
            <Table.Tdata tdataStyles="hidden sm:block text-center">{quantity}</Table.Tdata>
            <Table.Tdata tdataStyles="hidden xl:block text-center">{event.eventDate}</Table.Tdata>
            <Table.Tdata tdataStyles="justify-center">{booking.status}</Table.Tdata>
        </Table.Row>

    );
}

export default AdminBookingRow;