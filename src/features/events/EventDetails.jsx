import {Link, useNavigate} from "react-router-dom";
import {format} from 'date-fns';
import Icons from "../../ui/Icons.jsx";
import {useGetEvent} from "./hooks/useGetEvent.js";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx"
import defaultUser from "../../images/user/default-user.jpeg";
import ListItem2 from "../../ui/lists/ListItem2.jsx";
import BackButton from "../../ui/buttons/BackButton.jsx";
import {useGetTeamById} from "../teams/hooks/useGetTeamById.js";
import {useGetTeamEvents} from "./hooks/useGetTeamEvents.js";
import EventItem from "./EventItem.jsx";
import {EditButton} from "../../ui/buttons/Button.jsx";

/**
 * Renders the details of an event.
 *
 * @return {JSX.Element} The JSX element containing the event details.
 *
 * @author James M Kambanga
 * Date: April 20, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function EventDetails() {
    const navigate = useNavigate();
    const {isFetchingEvent, event} = useGetEvent();

    const {isFetchingTeam, team} = useGetTeamById(event?.assignedTeam);
    const {leaderData, members, id: teamId, name} = team?.[0] || {};
    const {isFetching: isFetchingTeamEvents, teamEvents} = useGetTeamEvents(teamId);

    const leaderExists = Boolean(leaderData);

    const isFetching = isFetchingEvent || isFetchingTeam || isFetchingTeamEvents;

    if (isFetching) return <Spinner />

    if (!event) return <Empty resourceName="Event" />

    return (
        <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                            <div>
                                <div className="mb-6">
                                    <BackButton/>
                                </div>
                                <h4 className="flex mb-2 text-left text-title-xsm font-bold text-black dark:text-white sm:text-title-md">
                                    {event.eventName}
                                    <span>
                                        <EditButton onClick={() => navigate("edit", {replace: true})} />
                                    </span>
                                </h4>

                                <div
                                    className="text-sm font-semibold text-indigo-500 uppercase mb-2"> {format(event.eventDate, 'eeee, MMM dd, yyyy')} &mdash;
                                    {event.startTime} &rarr; {event.endTime}
                                </div>

                                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                                    <div className="flex items-center sm:mr-4">
                                        <a className="block mr-2 shrink-0" href="#0">
                                            <img className="rounded-full" src={leaderData?.avatar || defaultUser}
                                                 width="32" height="32"
                                                 alt="User 04"/>
                                        </a>
                                        {!leaderExists ? <p>No leader assigned</p> : (
                                            <div className="text-sm whitespace-nowrap">
                                                Supervised by{' '}
                                                <Link className="font-semibold text-slate-800 dark:text-slate-100"
                                                      to="#0">
                                                    {`${leaderData?.firstname} ${leaderData?.lastname}`}
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    {/* Right side */}
                                    <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                                        <div className="text-sm inline-flex items-center font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                                            <span>{name}</span>
                                        </div>
                                        <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                                            Upcoming
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


                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Event
                                        Details</h2>

                                    <p className="mb-6">
                                        {event.description}
                                    </p>

                                </div>
                                <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>


                                <div>
                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">More
                                        Events</h2>
                                    {!teamEvents?.length ? <p>No events assigned</p> : (
                                        teamEvents?.map((event) => (
                                            <EventItem key={event.id} event={event} isFetching={isFetching}/>
                                        ))
                                    )}
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
                                        {members?.map((member, index) => (
                                            <ListItem2 key={index} image={member?.avatar || defaultUser} content={`${member?.firstname} ${member?.lastname}`}/>
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