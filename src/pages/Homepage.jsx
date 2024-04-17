import {Link} from "react-router-dom";
import EventList from "../features/events/Eventlist.jsx";
import Homepagevid from "../features/events/Homepagevid.mp4"; 

/**
 * A function that renders the Homepage component.
 *
 * @return {JSX.Element} The eventList component which will be used in the Homepage Component
 *
 * @author Hiruy Alemseged
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

// Two issues that i faced which i would appreciate your help in, firstly, I am having hard time importing the fonts used in the other
// components so i can match the fonts to match the rest of the front end. Secondly, I am having a hard time importing the dyson logos specifically 
// my-dyson-logo(copy).png. I wanted to place that logo on top of the upcoming events title on the event list. Anyone who could assist
// with that will help greatly. 

function Homepage() {
    
    return (
        <div className="px-4">
            {/* Video cover which plays in the Backround */}
            <main className="relative min-h-screen">
                <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
                    <source src={Homepagevid} type="video/mp4" />
                </video>
                {/* In order to make the video cover a bit darker  */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col items-center ">
                    <div className="text-center">
                        <h1 className="text-8xl font-bold text-white pt-7 "> Dyson Media-Mapper</h1>
                    </div>
                    
                    <p className="text-lg text-white">Welcome to Dyson's Media-Mapper, where tracking is made easy</p>
                    <div className="flex flex-col items-center mt-8">
                        {/* currently linked to the dashboard since my copy of this project doesn't have the sign in page
                        can change later */}
                         <p className="text-lg font-semibold text-white">Interested in an Event?</p>
                        <Link to="/dashboard" className="bg-gray-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                            Register Now!
                        </Link>
                        <div className="text-center">
                            <EventList /> 
                        </div>
                        <p className="text-lg font-semibold text-white">Already signed in?</p>
                        <Link to="/dashboard" className="bg-gray-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                            Dashboard
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Homepage;