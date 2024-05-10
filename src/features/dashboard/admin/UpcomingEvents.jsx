import {isToday, isFuture, format} from "date-fns";
import AdminListItem from "./AdminListItem.jsx";
import {HiOutlineCheckBadge} from "react-icons/hi2";
import Spinner from "../../../ui/spinners/Spinner.jsx";

/**
 * Renders upcoming events based on the provided data.
 *
 * @param {boolean} isFetchingEvents - Indicates if events are currently being fetched.
 * @param {array} events - List of upcoming events to display.
 * @return {JSX.Element} Rendered upcoming events component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function UpcomingEvents({isFetchingEvents, events}) {

    if(isFetchingEvents) return <Spinner/>
    const eventsToday = events.filter((event) => isToday(new Date(event.eventDate)));
    const eventsFuture = events.filter((event) => isFuture(new Date(event.eventDate)));

    return (
        <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Upcoming Events</h2>
            </header>
            <div className="p-3">
                <div>
                    <header
                        className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">Today
                    </header>
                    <ul className="my-1">
                        { !eventsToday ? <p>No events scheduled today</p> :  eventsToday.map((event) => (
                            <AdminListItem key={event?.id} link={`/events/event-details/${event?.id}`}
                                           icon={<HiOutlineCheckBadge />} >
                                {`${event.eventName}, ${event.city} - ${format(new Date(event.eventDate), 'MMM dd, yyyy')}`}
                            </AdminListItem>
                        )) }

                    </ul>
                </div>

                <div>
                    <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
                        Future Events
                    </header>
                    <ul className="my-1">
                        { !eventsFuture ? <p>No no pending events</p> : eventsFuture.map((event) => (
                            <AdminListItem key={event?.id} link={`/events/event-details/${event?.id}`}>
                                {`${event.eventName}, ${event.city} - ${format(new Date(event.eventDate), "MMM dd, yyyy")}`}
                            </AdminListItem>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;