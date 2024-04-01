import { Link } from 'react-router-dom';
import Illustration from '../images/illustration/illustration-01.svg';
import Icons from "../ui/Icons.jsx";
function PageNotFound() {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
            <div className="mx-auto max-w-[410px]">
                <img src={Illustration} alt="illustration" />

                <div className="mt-7.5 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                        Sorry, the page can’t be found
                    </h2>
                    <p className="font-medium">
                        The page you were looking for appears to have been moved, deleted
                        or does not exist.
                    </p>
                    <Link to="/homepage"
                        className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary py-3 px-6 font-medium text-white hover:bg-opacity-90">
                        <Icons id="left-arrow" width="16" height="16" viewBox="0 0 16 14" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;