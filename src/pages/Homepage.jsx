import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/dashboard"
                  className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary py-3 px-6 font-medium text-white hover:bg-opacity-90">
                Dashboard
            </Link>
        </div>
    );
}

export default Homepage;