import Heading from '../../ui/Heading.jsx';
import FormRow from '../../ui/forms/FormRow.jsx';

/**
 * A function that renders the Homepage component.
 *
 * @return {JSX.Element} The homepage component which will be  used to display the homepage for the official website 
 *
 * @author Hiruy Alemseged
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function EventList() {
    const upcomingEvents = [
        { ID: "DYS29874", Event: "Dyson Product Fair", Date: "03/04/2024" },
        { ID: "DYS89373", Event: "Newcastle University", Date: "14/04/2024" },
        { ID: "DYS83729", Event: "London Exhibition", Date: "15/04/2024" },
        { ID: "DYS91829", Event: "Manchester Exhibition", Date: "22/04/2024" },
        { ID: "DYS18273", Event: "Blackpool Product Fair", Date: "23/04/2024" },
        { ID: "DYS92389", Event: "Bristol Exhibition", Date: "06/05/2024" }
    ];

    
    return (
        <div className="p-7 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark max-w-4xl mx-auto">
           
            <Heading title="Upcoming Events" />
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <FormRow label="Event ID" />
                    {upcomingEvents.map(event => (
                        <p key={event.ID} className="text-blue-800">{event.ID}</p>
                    ))}
                </div>
                <div>
                    <FormRow label="Event Name" />
                    {upcomingEvents.map(event => (
                        <p key={event.ID}  >{event.Event}</p>
                    ))}
                </div>
                <div>
                    <FormRow label="Event Date" />
                    {upcomingEvents.map(event => (
                        <p key={event.ID} >{event.Date}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventList;
    
