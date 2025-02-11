import {Link} from "react-router-dom";

/**
 * Renders an event card component with details like city, date, content, title, tag, id, and time.
 *
 * @param {string} city - The city associated with the event.
 * @param {string} date - The date of the event.
 * @param {string} content - The content or description of the event.
 * @param {string} title - The title of the event.
 * @param {string} tag - The tag associated with the event.
 * @param {string} id - The unique identifier of the event.
 * @param {Object} time - The object containing start and end time of the event.
 * @return {JSX.Element} The rendered event card component.
 *
 * @author James M Kambanga
 * Date: April 19, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function EventCard({city, date, content, title, tag, id, time}) {
    return (
        <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <article className="flex flex-col h-full p-5">
                <header>
                    <div className="mb-3 font-medium">
                        <div className="inline-flex text-center py-1 px-3 rounded-lg bg-sky-500 text-white hover:bg-blue-600 transition duration-150 ease-in-out">
                            {city}
                        </div>
                    </div>
                    <div>
                        <Link to={`/events/event-details/${id}`} className="inline-flex text-slate-800 dark:text-slate-100 hover:text-indigo-500 dark:hover:text-white mb-1">
                            <h3 className="h4 mb-2 text-xl leading-snug font-semibold">{title}</h3>
                        </Link>
                    </div>
                </header>
                <p className="text-lg text-gray-400 grow line-clamp-2">
                    {content}
                </p>
                <footer className=" mt-5">
                    <div className="font-medium">
                        <div className="text-medium font-semibold text-slate-500 mb-2"><span>{date}: </span> {time.start}
                            <span className="text-slate-400 dark:text-slate-600"> &rarr;</span> {time.end}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400">
                        {tag}
                        </p>
                        <div>
                            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                                to={`/events/event-details/${id}`}>More Details  &rarr;
                            </Link>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default EventCard;