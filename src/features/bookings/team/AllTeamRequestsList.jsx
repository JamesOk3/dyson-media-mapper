import Spinner from "../../../ui/spinners/Spinner.jsx";
import Empty from "../../../ui/Empty.jsx";
import GeneralContainer from "../../../ui/containers/GeneralContainer.jsx";
import Heading from "../../../ui/Heading.jsx";
import Table from "../../../ui/tables/Table.jsx";
import {useUser} from "../../auth/hooks/useUser.js";
import {useGetBookingsByTeam} from "../hooks/useGetBookingsByTeam.js";
import TeamBookingRow from "./TeamBookingRow.jsx";

/**
 * Renders a list of team requests with sorting and filtering options.
 *
 * @param {string} title - The title of the team requests section.
 * @param {string} sortKey - The key to determine the sorting criteria.
 * @return {JSX.Element} The list of team requests displayed in a table format.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function AllTeamRequestsList({title, sortKey}) {
    const {user} = useUser();
    const {isFetching, bookings} = useGetBookingsByTeam(user?.id)

    if(isFetching) return <Spinner/>
    if (!bookings) return <Empty resourceName="New Requests"/>

    // sort by status
    let filteredBookings = bookings.filter((booking) => booking.status === sortKey);

    const sortedBookings = filteredBookings.sort((a, b) => {
        if (a.status === b.status) {
            return new Date(b.created_at) - new Date(a.created_at);
        }
        return b.status - a.status
    })

    return (
        <GeneralContainer>
            <Heading title={title} />
            <Table >
                <Table.Header>
                    <Table.Thead theadStyles="">Product </Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Team</Table.Thead>
                    <Table.Thead theadStyles="hidden sm:block text-center">Quantity</Table.Thead>
                    <Table.Thead theadStyles="hidden xl:block text-center">Event Date</Table.Thead>
                    <Table.Thead theadStyles="text-center">Status</Table.Thead>
                </Table.Header>

                <Table.Body
                    data={sortedBookings}
                    render={(booking) => (
                        <TeamBookingRow
                            booking={booking}
                            key={booking.id}
                        />
                    )}
                />
            </Table>
        </GeneralContainer>
    );
}

export default AllTeamRequestsList;