import {useGetAllEvents} from "./hooks/useGetAllEvents.js";
import EventCard from "../../ui/Cards/EventCard.jsx";
import MinSearchBar from "../../ui/forms/MinSearchBar.jsx";
import {AddButton, ButtonGroup} from "../../ui/buttons/Button.jsx";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import {useNavigate} from "react-router-dom";

function Calendar() {
    const navigate = useNavigate();
    const {isFetching, events} = useGetAllEvents();

    if(isFetching) return <Spinner />

    if(!events) return <Empty resourceName="Events" />

    return (
        <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <main className="grow">
                    <div className="sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">

                            <div className="mb-4 sm:mb-0">
                                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Your Events
                                    🎟</h1>
                            </div>

                            <div className="grid grid-flow-col sm:auto-cols-max shadow-lg justify-start sm:justify-end gap-2">
                                <ButtonGroup>
                                    <MinSearchBar />
                                    <AddButton onClick={() => navigate('/events/add-event', {replace: true})} label="Add Event"  />
                                </ButtonGroup>
                            </div>

                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            {
                                events.map(event => {
                                    const {id, city, eventDate, eventName, startTime, endTime, description} = event;
                                    return (
                                        <EventCard
                                            key={id}
                                            id={id}
                                            city={city}
                                            date={eventDate}
                                            title={eventName}
                                            content={description}
                                            time={{start: startTime, end: endTime}}
                                            tag="Signed Up"
                                        />
                                    )
                                })
                            }
                        </div>

                        {/* Pagination */}
                        <div className="mt-8">
                        </div>

                    </div>
                </main>

            </div>

        </div>
    );
}

export default Calendar;