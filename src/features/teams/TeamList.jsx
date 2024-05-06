import {Link} from "react-router-dom";
import Icons from "../../ui/Icons.jsx";
import defaultUser from "../../images/user/default-user.jpeg";
import ListItem2 from "../../ui/lists/ListItem2.jsx";
import {useRef} from "react";
import {useGetTeamEvents} from "../events/hooks/useGetTeamEvents.js";
import EventItem from "../events/EventItem.jsx";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Modal from "../../ui/modals/Modal.jsx";
import UserListItem from "./UserListItem.jsx";
import {useGetUnassignedUsers} from "./hooks/useGetUnassignedUsers.js";
import LeaderForm from "./LeaderForm.jsx";

/**
 * Renders the TeamList component with team information and event details.
 *
 * @param {Object} leader - The leader of the team
 * @param {Array} members - The members of the team
 * @param {Object} team - The team details
 * @param {string} active - The active team
 * @param {function} handleToggle - Function to handle toggling
 * @param {function} onCloseModal - Function to close modal window
 * @return {JSX.Element} The rendered TeamList component
 *
 * @author James M Kambanga
 * Date: April 25, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function TeamList({leader, members, team, active, handleToggle, onCloseModal }) {
    const contentEl = useRef(null);
    const leaderExists = Boolean(leader);
    const {id: teamId, name} = team;

    const {isFetching: isFetchingUsers, users } = useGetUnassignedUsers();
    const {isFetching, teamEvents} = useGetTeamEvents(teamId);

    if (isFetching) return <Spinner />;

    return (
        <div className="rounded-md border border-stroke py-2 shadow-9 dark:border-strokedark dark:shadow-none md:p-6 xl:p-7.5">
            <button onClick={() => handleToggle(teamId)}
                className={`px-4 flex w-full items-center justify-between gap-2 ${active === teamId ? 'active' : ''}`}>

                <div>
                    <h4 className="text-left text-title-xsm font-bold text-black dark:text-white sm:text-title-md">
                        {name}
                    </h4>
                </div>
                <div className="flex h-9 w-full max-w-9 text-center items-center justify-center rounded-full border border-primary dark:border-white">
                    <Icons id="plus" className={`fill-primary duration-200 ease-in-out dark:fill-white ${
                        active === teamId ? 'hidden' : ''}`}/>
                    <Icons id="minus" width="15" height="3" viewBox="0 0 15 3"
                           className={`fill-primary duration-200 ease-in-out dark:fill-white ${active === teamId ? 'block' : 'hidden'}
                   `}/>
                </div>
            </button>

            <div ref={contentEl} className={`flex h-[100dvh] overflow-hidden mt-5 duration-200 ease-in-out ${
                active === teamId ? 'block' : 'hidden'}`} >
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                    <section className="p-4">
                        {/*<div className="px-4 sm:px-6 lg:px-8 py-8 w-full">*/}
                            <div className="max-w-7xl mx-auto flex flex-col justify-between xl:flex-row">
                                <div>
                                    <div className="mb-4">
                                        <h2 className="text-xl leading-snug  text-indigo-500 dark:text-slate-100 font-bold mb-2">Team
                                            Leader</h2>

                                        {!leaderExists ? (
                                            <Modal>
                                                <Modal.Open opens="leader-form">
                                                    <button
                                                        className="text-indigo-600 hover:underline hover:text-primary">
                                                        Assign Leader
                                                    </button>
                                                </Modal.Open>
                                                <Modal.Window name="leader-form">
                                                    {!users ? <p>The team has no members</p> :
                                                        <LeaderForm onClick={onCloseModal} team={team}/>
                                                    }
                                                </Modal.Window>
                                            </Modal>
                                        ) : (
                                            <div className="flex items-center sm:mr-4">
                                                <Link className="block mr-2 shrink-0" to="#0">
                                                    <img className="rounded-full" src={leader?.avatar || defaultUser}
                                                         width="32" height="32"
                                                         alt="User 04"/>
                                                </Link>
                                                <div className="text-sm whitespace-nowrap">
                                                    Managed by{' '}
                                                    <a className="font-semibold text-slate-800 dark:text-slate-100"
                                                       href="#0">
                                                        {`${leader?.firstname} ${leader?.lastname}`}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {leaderExists && (
                                        <div className="font-medium mb-6">
                                            <p>{`${leader?.postcode}, ${leader?.city}`}</p>
                                            <p>{leader?.phonenumber}</p>
                                            <p>{leader?.email}</p>

                                        </div>
                                    )}

                                </div>

                                {/* Sidebar */}
                                <div className="space-y-4">
                                    <div
                                        className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 xl:w-100">
                                        <div className="space-y-2">
                                            <Modal>
                                                <Modal.Open opens="users">
                                                    <button
                                                        className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                                                        <Icons id="plus" className="w-4 h-4 fill-current shrink-0"/>
                                                        <span className="ml-1">Add Member</span>
                                                    </button>
                                                </Modal.Open>
                                                <Modal.Window name="users">
                                                    {!users ? <p>No Users Available</p> : (
                                                        <ul>
                                                            {users?.map((user) => (
                                                                <UserListItem key={user.id} user={user}
                                                                              teamId={teamId}/>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </Modal.Window>
                                            </Modal>

                                        </div>
                                    </div>

                                    <div
                                        className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 xl:w-100">
                                        <div className="flex justify-between space-x-1 mb-5">
                                            <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">
                                                Team Members
                                            </div>
                                            <Link
                                                className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                                                to="#0">
                                                View All
                                            </Link>
                                        </div>
                                        <ul className="space-y-3">
                                            {members.map((member, index) => (
                                                <ListItem2 key={index} image={member?.avatar || defaultUser}
                                                           content={`${member?.firstname} ${member?.lastname}`}/>
                                            ))
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        {/*</div>*/}
                    </section>
                    <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>

                    <section className="p-2 max-w-7xl mx-auto">

                        <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Assigned
                            Events</h2>
                        <div className="grid gap-2 sm:grid-cols-2 sm:gap-8">

                            {!teamEvents?.length ? <p>No events assigned</p> : (
                                teamEvents?.map((event) => (
                                    <EventItem key={event.id} event={event} isFetching={isFetching}/>
                                ))
                            )}

                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default TeamList;