import {isFuture} from "date-fns";

import Spinner from "../../../ui/spinners/Spinner.jsx";
import DataItem from "../admin/DataItem.jsx";
import {HiOutlineBriefcase, HiOutlineShoppingCart, HiOutlineUserGroup} from "react-icons/hi2";

/**
 * Renders the TeamQuickAccess component.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {boolean} isFetchingEvents: Indicates if events are being fetched.
 *   - {Array} events: The array of events data.
 *   - {boolean} isFetchingRequests: Indicates if requests are being fetched.
 *   - {Array} bookings: The array of booking data.
 * @return {JSX.Element} The rendered TeamQuickAccess component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function TeamQuickAccess({isFetchingEvents, events, isFetchingRequests, bookings}) {

    if(isFetchingEvents || isFetchingRequests) return <Spinner/>

    const pendingApproval = bookings.reduce((count, booking) => booking.status === "approved" ? count + 1 : count, 0);
    const returnedProducts = bookings.reduce((count, booking) => booking.status === "pending" ? count + 1 : count, 0);
    const futureEvents = events.reduce((count, event) => isFuture(event.eventDate) ? count + 1 : count, 0);

    return (
        <div>
            <h2 className="text-title-sm2 font-bold text-black dark:text-white mb-3">
                Quick Access
            </h2>

            <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
                <DataItem title="Waiting Approval"
                          value={pendingApproval}
                          link="/bookings/product-requests"
                          icon={<HiOutlineBriefcase />}
                          style="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-white"/>
                <DataItem title="Returned Products"
                          value={returnedProducts}
                          link="/bookings/product-requests"
                          icon={<HiOutlineShoppingCart />}
                          style="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"/>
                <DataItem title="Future Events"
                          value={futureEvents}
                          icon={<HiOutlineUserGroup />}
                          style="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white"/>
            </div>
        </div>
    );
}

export default TeamQuickAccess;