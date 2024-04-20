import {Link} from "react-router-dom";
import {format} from 'date-fns';
import Icons from "../../ui/Icons.jsx";
import {useGetEvent} from "./hooks/useGetEvent.js";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx"
import defaultUser from "../../images/user/default-user.jpeg";
import ListItem2 from "../../ui/lists/ListItem2.jsx";

const members = [
    {
        name: 'Ningxin Wang',
        avatar: defaultUser,
    },
    {
        name: 'James M Kambanga',
        avatar: defaultUser,
    },
    {
        name: 'Jiayi Li',
        avatar: defaultUser,
    },
    {
        name: 'Grace Morrow',
        avatar: defaultUser,
    }
]

function EventDetails() {

    const {isFetchingEvent, event} = useGetEvent();

    if (isFetchingEvent) return <Spinner />

    if (!event) return <Empty resourceName="Event" />

    return (
        <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                            <div>
                                <div className="mb-6">
                                    <Link className="btn-sm px-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                        to="/events">
                                        <Icons id="chevron-left" className="fill-current text-slate-400 dark:text-slate-500 mr-2" width="7" height="12" viewBox="0 0 7 12" />
                                        <span>Back To Events</span>
                                    </Link>
                                </div>
                                <div className="text-sm font-semibold text-indigo-500 uppercase mb-2"> {format(event.eventDate, 'eeee, MMM dd, yyyy')} &mdash;
                                    {event.startTime} &rarr; {event.endTime}
                                </div>
                                <header className="mb-4">
                                    {/* Title */}
                                    <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">{event.title}</h1>
                                    <p>{event.description}</p>
                                </header>

                                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                                    {/* Author */}
                                    <div className="flex items-center sm:mr-4">
                                        <a className="block mr-2 shrink-0" href="#0">
                                            <img className="rounded-full" src={defaultUser} width="32" height="32"
                                                 alt="User 04"/>
                                        </a>
                                        <div className="text-sm whitespace-nowrap">
                                            Hosted by{' '}
                                            <a className="font-semibold text-slate-800 dark:text-slate-100" href="#0">
                                                Hiruy Alemseged
                                            </a>
                                        </div>
                                    </div>
                                    {/* Right side */}
                                    <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                                        {/* Tags */}
                                        <div className="text-xs inline-flex items-center font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                                            <span>Live Event</span>
                                        </div>
                                        <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                                            Free
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Location</h2>
                                    <div className="font-medium mb-6">
                                        <h5>{event.address}</h5>
                                        <p>{`${event.city} ${event.postcode}, ${event.country}`}</p>

                                        <button
                                            className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-primary duration-300 ease-in-out">
                                            <p>View on map</p>
                                            <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                   className="absolute -right-2 top-1/2 -translate-y-1/2 fill-current"
                                            />
                                        </button>
                                    </div>


                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Event Details</h2>

                                    <p className="mb-6">
                                        {event.description}
                                    </p>

                                </div>
                                <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>


                                <div>
                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Similar
                                        Events</h2>
                                    <div className="space-y-8 sm:space-y-5 my-6 lg:mb-0">

                                        <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">

                                            <div className="grow p-5 flex flex-col">
                                                <div className='grow'>
                                                    <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon
                                                        27 Dec, 2024
                                                    </div>
                                                    <a className="inline-flex mb-2" href="#0">
                                                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                                                            London &amp;  Dyson Special Event</h3>
                                                    </a>
                                                    <div className="text-sm">
                                                        Lorem ipsum is placeholder text commonly used in the graphic,
                                                        print, and publishing industries for previewing layouts.
                                                    </div>
                                                </div>
                                                {/* Footer */}
                                                <div className="flex justify-between mt-3">
                                                    {/* Tag */}
                                                    <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                                                        <span>Live Event</span>
                                                    </div>
                                                    {/* Avatars */}
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex -space-x-3 -ml-0.5">
                                                            <img
                                                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                                                src={defaultUser} width="28" height="28" alt="User 02"/>
                                                            <img
                                                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                                                src={defaultUser} width="28" height="28" alt="User 03"/>
                                                            <img
                                                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                                                src={defaultUser} width="28" height="28" alt="User 04"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-4">
                                <div
                                    className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                                    <div className="space-y-2">
                                        <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                                            <Icons id="check" className="w-4 h-4 fill-current shrink-0"  viewBox="0 0 16 16"/>
                                            <span className="ml-1">Attending</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                                    <div className="flex justify-between space-x-1 mb-5">
                                        <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">
                                            Team Members
                                        </div>
                                        <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                                           to="#0">
                                            View All
                                        </Link>
                                    </div>
                                    <ul className="space-y-3">
                                        {members.map((member, index) => (
                                                <ListItem2 key={index} image={member.avatar} content={member.name}/>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default EventDetails;