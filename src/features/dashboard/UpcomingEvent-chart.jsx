import { Link } from "react-router-dom";
/**
 * A function that creates an upcoming event chart to be dislayed on the Dashboard for authorized users 
 * @param {string} title - The title of the event
 * @param {string} Location - The tag associated with the location
 * @param {string} id - The unique identifier of the event.
 * @param {string} Date- The string containing the date of the event 
 * @return {JSX.Element} The upcoming event chart.
 *
 * @author Hiruy Alemseged
 * Date: May 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function UpcomingEventChart() {
  const upcomingEvents = [
    { Title: "Dyson Innovation Touch: Future Technology Salon", Location: "Beijing, China", Date: "22/05/2024" },
    { Title: "Dyson Technology Revolution: Exploring Intelligent Living", Location: "London, UK", Date: "12/05/2024" },
    { Title: "Dyson Supersonic™ hair dryer in Ceramic Pop", Location: "North Korea", Date: "01/05/2024" },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-12">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="w-32 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <article className="flex flex-col h-full bg-white-300">
              <header className="p-2">
                <div className="mb-1 font-medium">
                  <h3 className="h4 mb-1 text-lg leading-snug font-semibold">{event.Title}</h3>
                  <p className="text-xs text-gray-400">{event.Location}</p>
                </div>
              </header>
              <footer className="mt-auto p-2">
                
                <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  to={`/events/event-details/${index}`}>More Details &rarr;</Link>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEventChart;