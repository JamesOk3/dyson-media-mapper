import {useUser} from "../../auth/hooks/useUser.js";
import {useGetBookingsByTeam} from "../../bookings/hooks/useGetBookingsByTeam.js";
import {useGetEventsByUserId} from "../../events/hooks/useGetEventsByUserId.js";
import TeamQuickAccess from "./TeamQuickAccess.jsx";
import TeamEvents from "./TeamEvents.jsx";

/**
 * Function to render the Team Dashboard component which displays quick access to team events, bookings, and event details.
 *
 * @returns {JSX.Element} React component representing the Team Dashboard
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function TeamDashboard() {
    const {user} = useUser();
    const {isFetching: isFetchingRequests, bookings} = useGetBookingsByTeam(user?.id);
    const {isFetching, events} = useGetEventsByUserId(user?.id);

    return (
        <>
           <TeamQuickAccess
               isFetchingEvents={isFetching}
               events={events}
               isFetchingRequests={isFetchingRequests}
               bookings={bookings}/>
            <TeamEvents isFetching={isFetching} events={events}/>
        </>
    );
}

export default TeamDashboard;