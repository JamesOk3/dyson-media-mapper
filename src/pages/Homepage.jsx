import {Link} from "react-router-dom";
import Eventlist from "../features/events/EventList";
function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/dashboard"
                  className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary py-3 px-6 font-medium text-white hover:bg-opacity-90">
                Dashboard
            </Link>
            <Eventlist />
            <h3>Interested in an Event?</h3>
            <button className="mt-4 bg-grey-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Register Now!
            </button>
        </div>
    );
}

export default Homepage;