import {format} from "date-fns";
import AdminListItem from "./AdminListItem.jsx";
import {HiOutlineCheckBadge} from "react-icons/hi2";
import Spinner from "../../../ui/spinners/Spinner.jsx";

/**
 * Renders the PendingRequests component.
 *
 * @param {boolean} isFetchingRequests - Indicates if requests are being fetched.
 * @param {Array} bookings - The array of bookings data.
 * @return {JSX.Element} The rendered PendingRequests component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function PendingRequests({isFetchingRequests, bookings}) {

    if (isFetchingRequests) return <Spinner/>;

    const pendingRequests = bookings.filter((booking) => booking.status === "pending");

    return (
        <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">New Requests</h2>
            </header>
            <div className="p-3">
                <div>
                    <header
                        className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
                        Urgent Requests
                    </header>
                    <ul className="my-1">
                        { !pendingRequests ? <p>No urgent requests</p> : pendingRequests.map((request) => (
                            <AdminListItem key={request.id} link={`/bookings/product-requests`}
                                           icon={<HiOutlineCheckBadge />} >
                                {`${request.product.name} (Quantity: ${request.product.quantity} ), - ${format(new Date(request.event.eventDate), 'MMM dd, yyyy')}`}
                            </AdminListItem>
                        ))}

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default PendingRequests;