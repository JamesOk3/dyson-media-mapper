import {useGetAllRequests} from "../hooks/useGetAllRequests.js";
import Spinner from "../../../ui/spinners/Spinner.jsx";
import Empty from "../../../ui/Empty.jsx";
import GeneralContainer from "../../../ui/containers/GeneralContainer.jsx";
import Table from "../../../ui/tables/Table.jsx";
import Heading from "../../../ui/Heading.jsx";
import AdminBookingRow from "./AdminBookingRow.jsx";

/**
 * Renders a list of product requests with sorting and filtering options.
 *
 * @param {string} sortKey - The key to determine the sorting criteria.
 * @param {string} title - The title of the product requests section.
 * @return {JSX.Element} The list of product requests displayed in a table format.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function AllProductRequests({sortKey = "all", title}) {
    const {isFetching, bookings: productRequests} = useGetAllRequests();

    if(isFetching) return <Spinner/>
    if (!productRequests) return <Empty resourceName="New Requests"/>

    let bookings;

    sortKey === "all" ? bookings = productRequests :
        bookings = productRequests.filter((booking) => booking.status === sortKey);

    const sortedBookings = bookings.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <GeneralContainer>
            <Heading title={title} />
            <Table >
                <Table.Header>
                    <Table.Thead theadStyles="">Product </Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Team</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Quantity</Table.Thead>
                    <Table.Thead theadStyles="hidden xl:block text-center">Event Date</Table.Thead>
                    <Table.Thead theadStyles="text-center">{sortKey === "pending" ? "Action" : "Status"}</Table.Thead>
                </Table.Header>

                <Table.Body
                    data={sortedBookings}
                    render={(booking) => (
                        <AdminBookingRow
                            booking={booking}
                            key={booking.id}
                            sortKey={sortKey}
                        />
                    )}
                />
            </Table>
        </GeneralContainer>
    );
}

export default AllProductRequests;