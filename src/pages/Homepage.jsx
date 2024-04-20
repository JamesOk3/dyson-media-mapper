import {Link, Outlet} from "react-router-dom";
import EventList from "../features/events/Eventlist.jsx";
import Homepagevid from "../features/events/Homepagevid.mp4";
import LoginForm from "../features/auth/LoginForm.jsx";
import ResetPassword from "../features/auth/ResetPassword.jsx";
import Sidebar from "../layout/sidebar/Index.jsx";
import Header from "../layout/header/Index.jsx";
import LogoIcon from "../images/logo/my-dyson-logo.png";
import DarkModeSwitcher from "../layout/header/DarkModeSwitcher.jsx";
import DropDownNotification from "../layout/header/DropDownNotification.jsx";
import DropDownMessage from "../layout/header/DropDownMessage.jsx";
import DropDownUser from "../layout/header/DropDownUser.jsx";

/**
 * A function that renders the Homepage component.
 *
 * @return {JSX.Element} The eventList component which will be used in the Homepage Component
 *
 * @author Hiruy Alemseged
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */


function Homepage() {
    
    return (
         <div>
             <main className="relative flex h-screen overflow-hidden justify-center p-4">
                 <video autoPlay loop muted className="fixed inset-0 object-cover w-full h-full z-0">
                     <source src={Homepagevid} type="video/mp4"/>
                 </video>
                 {/* In order to make the video cover a bit darker  */}
                 <div className="absolute inset-0 bg-black opacity-90 z-10"></div>

                 <div className="relative z-20 flex flex-col items-center ">
                     <div className="text-center">
                         <h1 className="text-3xl font-bold text-white pt-7 "> Dyson Media-Mapper</h1>
                         <p className="text-lg text-white">Welcome to Dyson's Media-Mapper, where tracking is made
                             easy</p>
                     </div>

                     <div className="flex flex-col items-center justify-center mt-8">
                              <p className="text-lg font-semibold text-white">Interested in an Event?</p>
                             <Link to="/login" className="bg-gray-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                                 Register Now!
                             </Link>

                             <EventList />

                             <p className="text-lg font-semibold text-white">Already signed in?</p>
                             <Link to="/login" className="bg-gray-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                                 Login Here
                             </Link>
                         </div>
                     </div>
                 </main>
             </div>
    );
}

export default Homepage;