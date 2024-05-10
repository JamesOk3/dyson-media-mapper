import QuickAccess from "./QuickAccess.jsx";
import UpcomingEvents from "./UpcomingEvents.jsx";
import PendingRequests from "./PendingRequests.jsx";
import UserActivityChart from "../UserActivity-chart.jsx";
import MonthlyUsersChart from "../MonthlyUsers-chart.jsx";
import {useGetAllRequests} from "../../bookings/hooks/useGetAllRequests.js";
import {useGetAllEvents} from "../../events/hooks/useGetAllEvents.js";

/**
 * Renders the AdminDashboard component (provide quick access to application features).
 *
 * @return {JSX.Element} The rendered AdminDashboard component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function AdminDashboard() {
    const {isFetching: fetchingRequests, bookings} = useGetAllRequests();
    const {isFetchingEvents, events} = useGetAllEvents();


    return (
        <>
            <QuickAccess
                isFetchingRequests={fetchingRequests}
                bookings={bookings}
                events={events}
                isFetchingEvents={isFetchingEvents}
            />

            <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
               <UpcomingEvents isFetchingEvents={isFetchingEvents} events={events} />
                <PendingRequests isFetchingRequests={fetchingRequests} bookings={bookings} />


                <div className="p-2 col-span-12 xl:col-span-7 bg-white dark:bg-slate-800  shadow-xl ">
                    <MonthlyUsersChart />
                </div>

                <div className="col-span-12 xl:col-span-5 bg-white shadow-xl dark:bg-slate-800 ">
                    <UserActivityChart />
                </div>

            </div>

        </>


    );
}

export default AdminDashboard;