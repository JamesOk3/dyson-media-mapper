import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import AppLayout from "./layout/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Stock from "./features/products/Stock.jsx";
import AddProduct from "./features/products/AddProduct.jsx";
import Categories from "./features/products/Categories.jsx";
import Events from "./pages/Events.jsx";
import Calendar from "./features/events/Calendar.jsx";
import AddEvent from "./features/events/AddEVent.jsx";
import Bookings from "./pages/Bookings.jsx";
import ProductRequests from "./features/bookings/ProductRequests.jsx";
import PickupLocation from "./features/bookings/PickupLocations.jsx";
import Teams from "./pages/Teams.jsx";
import Users from "./pages/Users.jsx";
import Guests from "./pages/Guests.jsx";
import Reports from "./pages/Reports.jsx";
import EventReports from "./features/reports/EventReports.jsx";
import ProductReports from "./features/reports/ProductReports.jsx";
import CustomerReports from "./features/reports/CustomerReports.jsx";
import TeamReports from "./features/reports/TeamReports.jsx";
import PageTitle from "./ui/PageTitle.jsx";
import Settings from "./pages/Settings.jsx";
import Administration from "./features/settings/Administration.jsx";

/**
 * Renders the main application component.
 * Provide routes to all parts of the application.
 *
 * @return {JSX.Element} The main application component.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />} >
                        <Route index element={
                            <>
                            <PageTitle title="Media Mapper Dashboard | Dyson - External Media Team Management" />
                            <Dashboard />
                            </>
                        }/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/products" element={<Products />} >
                            <Route path="/products/stock" element={<Stock />} />
                            <Route path="/products/add-product" element={<AddProduct />} />
                            <Route path="/products/categories" element={<Categories />} />
                        </Route>
                        <Route path="/events" element={<Events />} >
                            <Route path="/events/calendar" element={<Calendar />} />
                            <Route path="/events/add-event" element={<AddEvent />} />
                        </Route>
                        <Route path="/bookings" element={<Bookings />} >
                            <Route path="/bookings/product-requests" element={<ProductRequests />} />
                            <Route path="/bookings/pickup-locations" element={<PickupLocation />} />
                        </Route>
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/guests" element={<Guests />} />
                        <Route path="/reports" element={<Reports />} >
                            <Route path="/reports/events-statistics" element={<EventReports />} />
                            <Route path="/reports/products-statistics" element={<ProductReports />} />
                            <Route path="/reports/customers-statistics" element={<CustomerReports />} />
                            <Route path="/reports/teams-statistics" element={<TeamReports />} />
                        </Route>
                        <Route path="/settings" element={<Settings />} >
                            <Route path="/settings/admin" element={<Administration />} />
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App;
