import {Link} from "react-router-dom";
import Spinner from "../../ui/spinners/Spinner.jsx";
import {format} from "date-fns";

/**
 * Renders an event item component used to display summary list of events
 *
 * @param {Object} props - The props object containing the event and isFetching properties.
 * @param {Object} props.event - The event object containing the event details.
 * @param {boolean} props.isFetching - Indicates whether the event is currently being fetched.
 * @return {JSX.Element} The rendered event item component.
 *
 * @author James M Kambanga
 * Date: April 22, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function EventItem({event, isFetching}) {
    const {id, eventName, eventDate, city, description} = event

    if (isFetching) return <Spinner />

    return (
        <div className="space-y-8 sm:space-y-5 my-6 lg:mb-0">

            <article
                className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">

                <div className="grow p-5 flex flex-col">
                    <div className='grow'>
                        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
                            {format(eventDate, 'eeee, MMM dd, yyyy')}
                        </div>
                        <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{eventName}</h3>
                        </a>
                        <div className="text-sm line-clamp-1">
                            {description}
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div className="text-sm inline-flex items-center font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                            <span>{city}</span>
                        </div>
                        <div>
                            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                                to={`/events/event-details/${id}`}>More Details  &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default EventItem;