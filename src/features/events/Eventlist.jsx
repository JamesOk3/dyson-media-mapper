import React, { useState, useEffect } from 'react';

/**
 * A function that renders the Homepage component.
 *
 * @return {JSX.Element} The eventList component which will be used in the Homepage Component
 *
 * @author Hiruy Alemseged
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Eventlist() {
    // Sample events to be shown on screen, once data is updated in backend it will update this list of events 
    
    const upcomingEvents = [
        { ID: "DYS29874", Event: "Dyson Product Fair", Date: "03/04/2024" },
        { ID: "DYS89373", Event: "Newcastle University", Date: "14/04/2024" },
        { ID: "DYS83729", Event: "London Exhibition", Date: "15/04/2024" },
        { ID: "DYS91829", Event: "Manchester Exhibition", Date: "22/04/2024" },
        { ID: "DYS18273", Event: "Blackpool Product Fair", Date: "23/04/2024" },
        { ID: "DYS92389", Event: "Bristol Exhibition", Date: "06/05/2024" }
    ];
    
    const [Event, updateEvents] = useState(upcomingEvents);
   

    // useEffect() => {}
    // Need to add logic for useeffect to connect to backend, as long as the data in the backend remains empty, this will 

     return (
        <div class="rounded-xl h-16 w-24 flex bg-teal-400 m-2">
            <h2> Upcoming Events </h2>
            <ul>
                {UpcomingEvents.map(event => (
                    <li key={event.ID}>
                        {event.Event} - {event.Date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default eventList; 