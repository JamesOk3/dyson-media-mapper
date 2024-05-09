import {Link, Outlet} from "react-router-dom";
import ProductRequests from "../ui/Cards/ProductRequests";
import UserActivityChart from "../features/dashboard/UserActivity-chart";
import MonthlyUsersChart from "../features/dashboard/MonthlyUsers-chart";
import UpcomingEventChart from "../features/dashboard/UpcomingEvent-chart";
/**
 * A function that renders the Dashboard for users .
 *
 * @return {JSX.Element} This component will strictly be used for the Dashboard
 *
 * @author Hiruy Alemseged
 * Date: April 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Dashboard() {
    return (
    
      <div>
      <h1 className="text-4xl font-extrabold">Quick Access</h1>
      <div className="mt-7 flex flex-wrap gap-36">
          <Link to="/Settings" className="bg-purple-800 text-white py-3 px-6 rounded-none uppercase font-medium shadow-lg transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Account Settings
          </Link>
          <Link to="/Users" className="bg-purple-800 text-white py-3 px-6 rounded-none uppercase font-medium shadow-lg transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Manage Users
          </Link>
          <Link to="/Teams" className="bg-purple-800 text-white py-3 px-6 rounded-none uppercase font-medium shadow-lg transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Manage Teams
          </Link>
      </div>
  
                            
                             <div className="mt-15 " >
                                 
    
                             <div className="flex justify-between gap-14">

  <div className="w-1/2 bg-purple-100 shadow-2xl">
  <Link to="/Bookings/"  className="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white mb-1">
    <h3 className="bg-blue-400 text-white py-3 px-6 rounded-none uppercase font-medium shadow-lg transition duration-300 ease-in-out hover:bg-purple-00 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Product Requests</h3>
    </Link>
    <ProductRequests/>
  </div>

 
  <div className="w-1/2 bg-purple-100 shadow-2xl">
  <Link to="/Events/"  className="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white mb-1">
    <h3 className="bg-blue-400 text-white py-3 px-6 rounded-none uppercase font-medium shadow-lg transition duration-300 ease-in-out hover:bg-purple-00 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Upcoming Events</h3>
    </Link>
    <UpcomingEventChart/>
  </div>

                    </div>
                    </div>
                    <div className="flex justify-between gap-12  mt-8">
                       
        <div className="w-1/2   bg-purple-100 dark-purple-100 shadow-2xl">
          <UserActivityChart />
        </div>
        <div className="w-1/2   bg-purple-100 shadow-2xl ">
          <MonthlyUsersChart />
        </div>
      </div>
      </div>
    )
}
export default Dashboard;