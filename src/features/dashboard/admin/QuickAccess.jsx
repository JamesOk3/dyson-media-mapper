import DataItem from "./DataItem.jsx";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {HiOutlineBriefcase, HiOutlineShoppingCart} from "react-icons/hi2";
import Spinner from "../../../ui/spinners/Spinner.jsx";

/**
 * Function that renders the Quick Access component.
 *
 * @param {boolean} isFetchingEvents - Indicates if events are being fetched.
 * @param {Array} events - The array of events data.
 * @param {boolean} isFetchingRequests - Indicates if requests are being fetched.
 * @param {Array} bookings - The array of booking data.
 * @return {JSX.Element} The rendered Quick Access component.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function QuickAccess({isFetchingEvents, events, isFetchingRequests, bookings}) {

    if(isFetchingEvents || isFetchingRequests) return <Spinner/>

    const pendingApproval = bookings.reduce((count, booking) => booking.status === "pending" ? count + 1 : count, 0);
    const returnedProducts = bookings.reduce((count, booking) => booking.status === "sent-back" ? count + 1 : count, 0);

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
               <DataItem title="New Reports"
                    value={5}
                    icon={<HiOutlineDocumentReport />}
                    style="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white"/>

            </div>
        </div>
    );
}

export default QuickAccess;