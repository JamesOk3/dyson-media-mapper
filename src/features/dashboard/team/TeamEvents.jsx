import {isToday, subDays} from "date-fns";
import Spinner from "../../../ui/spinners/Spinner.jsx";
import Empty from "../../../ui/Empty.jsx";
import EventCard from "../../../ui/Cards/EventCard.jsx";
import Heading from "../../../ui/Heading.jsx";
import EventItem from "../../events/EventItem.jsx";

/**
 * Renders the team events component.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {boolean} isFetching: Indicates if the events are currently being fetched.
 *   - {Array} events: The array of events to display.
 * @return {JSX.Element} The rendered team events component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function TeamEvents({events, isFetching}) {

    if(isFetching) return <Spinner />

    if(!events) return <Empty resourceName="Events" />

    const todayEvents = events.filter(event => isToday(subDays(new Date(event.eventDate), 1)  ));

    return (
        // <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <main className="grow">
                    <div className=" py-8 w-full  mx-auto">
                        <div>
                            <Heading title="Today's Events" />
                            { !todayEvents.length ? <p>You have no events today</p> : (
                                todayEvents.map(event => <EventItem key={event.id} event={event} />
                                ))
                            }
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-full">
                                <Heading title="More Events" />
                            </div>

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

        // </div>
    );
}

export default TeamEvents;